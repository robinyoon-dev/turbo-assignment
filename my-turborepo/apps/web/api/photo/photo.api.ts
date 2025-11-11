import { PHOTO_API_PREFIX_URL } from "../../shared/constants/api";
import { Photo } from "../../shared/types/photo";

export async function getPhoto(id: string): Promise<Photo | null> {
    try {
        const res = await fetch(`${PHOTO_API_PREFIX_URL}/id/${id}/info`, {
            cache: 'no-store'
        });
        const data = await res.json();

        return data;
    } catch (error) {
        console.error('Error fetching photo:', error);
        return null;
    }
}