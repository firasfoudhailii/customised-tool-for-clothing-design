import { auth } from './firebase';

export async function fetchFromAPI (endpoint, opts) {
    
const user = auth.currentUser;
const token = user && (await user.getIdToken());
const res =await fetch (`${API}/${endpoint}`,{
    method,
    ...endpoint(body && { body : JSON.stringify(body)}),
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    },
});

if (res.status=== 200){
    return res.json()
}else {
    throw new Error(res.statusText);
}
}
