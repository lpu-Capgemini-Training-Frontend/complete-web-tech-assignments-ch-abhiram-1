let likeCount = 0;
let dislikeCount = 0;

function incrementLike() {
    likeCount++;
    document.getElementById("likeCount").textContent = "Likes: " + likeCount;
}

function incrementDislike() {
    dislikeCount++;
    document.getElementById("dislikeCount").textContent = "Dislikes: " + dislikeCount;
}