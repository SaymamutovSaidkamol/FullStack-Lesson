const addModalBtn = document.querySelector('.add-modal');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModalBtn = document.getElementById('closeBtn');
    const saveBtn = document.getElementById('savedBtn');

    const penNameInput = document.querySelector('#PenName');
    const priceInput = document.querySelector('#Price');
    const dateInput = document.querySelector('#Date');
    const tbody = document.querySelector('#tbody');
    const totalPriceElement = document.querySelector('#totalPrice');

    function openModal() {
        modalOverlay.classList.add('active');
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
    }

    function saveData() {
        if (penNameInput.value && priceInput.value && dateInput.value) {
            const item = {
                penName: penNameInput.value,
                price: parseFloat(priceInput.value),
                date: dateInput.value
            };
            fetch("https://6764223a52b2a7619f5b899a.mockapi.io/test", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            }).then(res => res.json())
                .then(newItem => {
                addItemToTable(newItem); // Jadvalga qo'shadi
                updateTotalPrice(); // Jami narxni qayta hisoblaydi
                closeModal();
                });

            penNameInput.value = '';
            priceInput.value = '';
            dateInput.value = '';
        } else {
            alert("Barcha joylar to'ldirilishi shart");
        }
    }

    function addItemToTable(item) {
        const row = `
            <tr>
                <td>${item.penName}</td>
                <td>${item.price}</td>
                <td>${item.date}</td>
            </tr>
        `;
        tbody.innerHTML += row; // Yangi qatorni oxiriga qo'shadi
    }

    function updateTotalPrice() {
        let totalPrice = 0;
        const rows = tbody.querySelectorAll('tr');
        rows.forEach(row => {
            const priceCell = row.children[1]; // Narx ustuni
            totalPrice += parseFloat(priceCell.textContent) || 0; // Narxni qo'shish
        });
        totalPriceElement.textContent = `Jami narxlar: ${totalPrice}`;
    }

    function displayData() {
        fetch("https://6764223a52b2a7619f5b899a.mockapi.io/test")
        .then(res => res.json())
        .then(data => {
            tbody.innerHTML = ''; // Jadvalni tozalash
            data.forEach(item => {
                addItemToTable(item); // Har bir elementni jadvalga qo'shadi
            });
            updateTotalPrice(); // Jami narxni hisoblaydi
        });
    }

    addModalBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    saveBtn.addEventListener("click", saveData);

    // Dastlab jadvalni to'ldirish
    displayData();