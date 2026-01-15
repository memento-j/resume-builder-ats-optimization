from fastapi import FastAPI
from app.routes.v1.profile_routes import router as profile_router

app = FastAPI()

app.include_router(profile_router, prefix="/profile", tags=["profile"])

@app.get("/")
def root():
    return {"message" : "resume builder api :)"}