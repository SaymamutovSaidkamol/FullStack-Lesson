const api = axios.create({
    baseURL: "https://6763a88c17ec5852cae98366.mockapi.io"
});

// Ma'lumotlarni olish
async function getData() {
    let malumot = await api.get("/title");
    console.log(malumot.data);
    renderData(malumot.data);
}

// Ma'lumotlarni ekranga chiqarish
function renderData(data) {
    const dataList = document.getElementById('data-list');
    dataList.innerHTML = '';
    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `ID: ${item.id}, Nomi: ${item.name}`;
        dataList.appendChild(li);
    });
}

// Yangi ma'lumot qo'shish
async function createPRD() {
    const nameInput = document.getElementById('nameInput').value;
    if (nameInput) {
        await api.post("/title", { name: nameInput });
        getData();
    }
}

// Ma'lumotni o'chirish
async function deleteData() {
    const deleteId = document.getElementById('deleteIdInput').value;
    if (deleteId) {
        await api.delete(`/title/${deleteId}`);
        getData();
    }
}

// Ma'lumotni o'zgartirish
async function updateData() {
    const updateId = document.getElementById('updateIdInput').value;
    const updateName = document.getElementById('updateNameInput').value;
    if (updateId && updateName) {
        await api.put(`/title/${updateId}`, { name: updateName });
        getData();
    }
}

// Dastlabki ma'lumotlarni olish
getData();
