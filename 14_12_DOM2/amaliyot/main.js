let trackId = document.getElementById("trackId");
let album = document.getElementById("album");
let track = document.getElementById("track");
let composer = document.getElementById("composer");
let unitPrice = document.getElementById("unitprice");
let savedBtn = document.getElementById("saved-btn");
let tbody = document.getElementById("tbody");

function deleteTrack(id) {
    let tracks = JSON.parse(localStorage.getItem("tracks")) || [];
    tracks = tracks.filter((val) => val.id !== id);
    localStorage.setItem("tracks", JSON.stringify(tracks));
    displayData();
}

savedBtn.addEventListener("click", () => {
    let tracks = JSON.parse(localStorage.getItem("tracks")) || [];

    if (
        trackId.value != "" &&
        album.value != "" &&
        track.value != "" &&
        composer.value != "" &&
        unitPrice.value != ""
    ) {
    let trackItem = {
        id: tracks?.length == 0 ? 1 : tracks?.at(-1).id + 1,
        trackId: trackId.value,
        album: album.value,
        track: track.value,
        composer: composer.value,
        unitPrice: unitPrice.value,
        };
        tracks.push(trackItem);
        localStorage.setItem("tracks", JSON.stringify(tracks));
        displayData();
        trackId.value = "";
        album.value = "";
        track.value = "";
        composer.value = "";
        unitPrice.value = "";
    } else {
        alert("Qiymatlar kiritilishi majburiy !");
    }
});

function displayData() {
    let tracks = JSON.parse(localStorage.getItem("tracks")) || [];
    let items = "";
    tracks.forEach((val, index) => {
        items += `
        <tr>
                <td>${index + 1}</td>
                <td>${val.trackId}</td>
                <td>${val.album}</td>
                <td>${val.track}</td>
                <td>${val.composer}</td>
                <td>${val.unitPrice}</td>
                <td class="actions">
                <a href="#"  data-bs-toggle="modal"
            data-bs-target="#exampleModalUpdate"
            data-bs-whatever="@mdo" class="edit" 
            onclick="updateTrack(${val.id})"
            >
            <i class="fas fa-pen fa-xs"></i></a>
                <a href="" onclick="deleteTrack(${
                    val.id
                })" class="trash"><i class="fas fa-trash fa-xs"></i></a>
                </td>
            </tr>
            `;
    });
    tbody.innerHTML = items;
}
displayData();

function updateTrack(id) {
    let tracks = JSON.parse(localStorage.getItem("tracks"));
    let findIndex = tracks.findIndex((val) => val.id == id);

    if (findIndex == -1) {
        alert("Not found track");
    } else {
        console.log(tracks[findIndex]);
        let trackId1 = document.getElementById("trackId1")
        let album1 = document.getElementById("album1")
        let track1 = document.getElementById("track1")
        let composer1 = document.getElementById("composer1")
        let unitPrice1 = document.getElementById("unitPrice1")

        trackId1.value = tracks[findIndex].trackId
        album1.value = tracks[findIndex].album
        track1.value = tracks[findIndex].track
        composer1.value = tracks[findIndex].composer
        unitPrice1.value = tracks[findIndex].unitPrice


        tracks[findIndex] = {
            trackId: trackId1.value,
            album: album1.value,
            track: track1.value,
            composer: composer1.value,
            unitPrice: unitPrice1.value
        }
        writeUpdate(tracks)
    }
}

function writeUpdate(data){
    localStorage.setItem("tracks", JSON.stringify(data))
}