let wrapper = document.querySelector("#wrapper");

async function getData() {
  try {
    let { data } = await axios.get(
      "https://67690e87cbf3d7cefd396d2c.mockapi.io/api/users"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function writeHtml() {
  let users = await getData();
  let items = "";
  users.forEach((val) => {
    items += `
          <div class="user-card">
          <div class="edit"><i class="fa-regular fa-pen-to-square"></i></div>
          <div class="avatar-wrapper">
            <div class="avatar">
              <img src="./images/avatar.jpg" alt="" />
            </div>
          </div>
          <div class="info">
            <p class="name">${val.name}</p>
            <p class="adress">
              <i class="fa-solid fa-location-dot"></i> ${val.adress}
            </p>
          </div>
          <div class="desc">
            ${val.desc}
          </div>
          <div class="footer">
            <div class="text">
              <p class="mem">Membership</p>
              <p><i class="fa-regular fa-star start"></i> Gold Member</p>
            </div>
            <div  class="delete"><button onclick="removeUser(${val.id})" >Delete</button></div>
          </div>
        </div>
      `;
  });
  wrapper.innerHTML = items;
}
writeHtml();

async function removeUser(id) {
  try {
    await axios.delete(
      `https://67690e87cbf3d7cefd396d2c.mockapi.io/api/users/${id}`
    );
    writeHtml();
  } catch (error) {
    console.log(error);
  }
}
