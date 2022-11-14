const BASE_URL = "/api/events";

export async function newEvent(userData) {
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
        throw new Error("Invalid event");
    }
}
export async function editEvent(userData, eventID) {
    // Fetch uses an options object as a second arg to make requests
    // other than basic GET requests, include data, headers, etc.
    const res = await fetch(`${BASE_URL}/${eventID}`, {
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
        throw new Error("Invalid Event");
    }
}


