const BASE_URL = "/api/posts";

export async function newPost(userData) {
    // Fetch uses an options object as a second arg to make requests
    // other than basic GET requests, include data, headers, etc.
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Fetch requires data payloads to be stringified
        // and assigned to a body property on the options object
        body: JSON.stringify(userData),
    }).then((res) => {
        return res.json();
    });

    if (res.status === "success") {
        return res;
    } else {
        throw new Error("Invalid post");
    }
}
export async function editPost(userData, postID) {
    // Fetch uses an options object as a second arg to make requests
    // other than basic GET requests, include data, headers, etc.
    const res = await fetch(`${BASE_URL}/${postID}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        // Fetch requires data payloads to be stringified
        // and assigned to a body property on the options object
        body: JSON.stringify(userData),
    }).then((res) => {
        return res.json();
    });

    if (res.status === "success") {
        return res;
    } else {
        throw new Error("Invalid post");
    }
}


