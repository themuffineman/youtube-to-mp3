from flask import Flask, request, jsonify
from youtube_transcript_api import YouTubeTranscriptApi

app = Flask(__name__)

@app.route('/transcript', methods=['GET'])
def get_transcript():
    print("Received Request")
    # Get the video_id from the query parameter
    video_id = request.args.get('video_id')
    if not video_id:
        return jsonify({"error": "Missing 'video_id' query parameter"}), 400

    try:
        # Fetch the transcript
        response = YouTubeTranscriptApi.get_transcript(video_id)
        # Combine the text fields
        combined_text = " ".join(item['text'] for item in response)
        # Return the combined text
        return jsonify({"video_id": video_id, "transcript": combined_text}), 200
    except Exception as e:
        # Handle errors (e.g., invalid video ID, no transcript available)
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
