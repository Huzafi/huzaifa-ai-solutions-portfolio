# chat_api.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from google import genai
import os


GEMINI_API_KEY = "AIzaSyBcF3K9qVPqvlsmllXJoOmLMb-q813w-3I"
client = genai.Client(api_key=GEMINI_API_KEY)

app = FastAPI()

# CORS settings for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Ya tumhare portfolio domain
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic model for request
class ChatRequest(BaseModel):
    prompt: str

@app.post("/api/chat")
async def chat_endpoint(chat_request: ChatRequest):
    prompt = chat_request.prompt
    try:
        # Gemini API call
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )
        ai_text = response.text
    except Exception as e:
        print("Error:", e)
        ai_text = "Sorry, I couldn't generate a response."

    return {"text": ai_text}
