const displayName = document.querySelectorAll('h3')[0]
const btnRandom = document.querySelector('.btn')
const nameMember = ['Hiền', 'Ngọc', 'Na', 'Hữu']
const quantityArray  = nameMember.length
        btnRandom.onclick = () => {
                const numberRandom = Math.floor(Math.random()*quantityArray)
                const randomName = nameMember[numberRandom]
                displayName.innerHTML = `Xin chúc mừng bạn <span>${randomName}</span> `
        }

    //const nameUser = prompt('Xin mời nhập tên: ');

//switch (nameUser) {
    //case "Hiền":
        //document.write("Xin mời bạn lên thuyết trình");
        //break;
    //case "Ngọc":
        //document.write("Xin mời bạn lên thuyết trình");
        //break;
    //case "Na":
        //document.write("Xin mời bạn lên thuyết trình");
        //break;
    //case "Hữu":
        //document.write("Xin mời bạn lên thuyết trình");
        //break;
    //default:
        //document.write("không có người phù hợp");
