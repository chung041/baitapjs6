
//Bài 1: Tìm số nguyên dương nhỏ nhất
document.getElementById("test").onclick = function () {
    let integerEl = +document.getElementById('integer').value //Số nguyên
    let sum = 0;
    let i = 1;
    while (sum < integerEl) {
        i++;
        sum += i;
    }
    document.getElementById('result1').innerHTML = i;
}

//Bài 2: Viết chương trình nhập vào 2 số x, n tính tổng
document.getElementById("calculate1").onclick = function () {
    let x = +document.getElementById("numberX").value
    let numberEl = +document.getElementById("number").value
    let i = " ";
    let overall = 0;
    if (numberEl<1) {
        alert("Vui lòng nhập lại")
    }
    for (let i = 1; i <= numberEl; i++) {
        overall += Math.pow(x, i);
    }
    document.getElementById("result2").innerHTML = overall;
}

//Bài 3: Nhập vào n. Tính giai thừa 1*2*...n
document.getElementById("calculate2").onclick = function () {

    let n = +document.getElementById("numberN").value
    let i = 1;
    let giaithua = 1;
    if (n < 0) {
        alert("Vui lòng nhập lại, n không âm")
    }
    while (i <= n) {
        giaithua *= i;
        i++;
    }
    document.getElementById("result3").innerHTML = giaithua;
}

//Bài 4: Viết chương trình nhập in ra 10 thẻ div
let btnCreat = document.getElementById("tạo")
let btnRemove = document.getElementById("xoá")
let output = document.getElementById("output")

document.getElementById("tạo").onclick = function () {
    btnCreat.classList.add("d-none");
    btnRemove.classList.remove("d-none");
    output.classList.remove("d-none");

    let name = "";
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            name = "bg-danger";
            document.getElementById("output").innerHTML += '<div class=' + name + '>' + "Div chẵn thứ: " + i + '</div>'
        } else {
            name = "bg-primary"
            document.getElementById("output").innerHTML += '<div class=' + name + '>' + "Div lẻ thứ: " + i + '</div>'
        }
    }
}

document.getElementById("xoá").onclick = function () {
    document.getElementById("output").classList.add("d-none")
    btnCreat.classList.remove("d-none");
    btnRemove.classList.add("d-none");

}

//Bài 5: In ra số nguyên tố
let resultEl = document.getElementById("result")
document.getElementById("check").onclick = function () {
    let soNhapEl = +document.getElementById("soNhap").value;
    let SNT = true; //Giả sử Số nguyên tố
    resultEl.innerHTML = " " //Reset lại dữ liệu mỗi lần user click button =>Tránh dữ liệu cũ đứng trước dữ liệu mới
    if (soNhapEl <= 1) {
        alert("Vui lòng nhập lại")
        return;
    }
    document.getElementById("result").classList.add("d-block")
    for (let i = 2; i <= soNhapEl; i++) {
        for (let j = 2; j <= i; j++) {
            if ((i % j) != 0) {
                continue;
            } else if (j == i) {
                SNT = true;
                break;
            } else {
                SNT = false;
                break;
            }
        }
        if (SNT) {
            resultEl.innerHTML += i + " "
        }

    }
}

