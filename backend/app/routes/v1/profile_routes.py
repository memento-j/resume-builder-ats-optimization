from fastapi import APIRouter, Depends
from app.controllers.profile_controller import get_profile, update_profile
from app.dependencies import get_current_user
from app.schemas.profile_update_schema import ProfileUpdate

router = APIRouter()

@router.get("/")
def route_get_profile(user = Depends(get_current_user)):
    return get_profile(user)

@router.patch("/")
def route_update_profile(payload: ProfileUpdate, user=Depends(get_current_user)):
    return update_profile(user, payload)