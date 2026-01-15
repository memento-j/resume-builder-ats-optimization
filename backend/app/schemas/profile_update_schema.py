from pydantic import BaseModel
from typing import Optional

class ProfileUpdate(BaseModel):
    first_name: Optional[str] = None #optional, if included must be a string, and if not included it is None
    last_name: Optional[str] = None