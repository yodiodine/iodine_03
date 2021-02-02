//해당 서브메뉴 open
const menu = document.querySelectorAll('.main-menu-li');

function menuopen(){
    const submenu = this.childNodes[2];
    submenu.style.display ="block"
}
function menuclose(){
    const submenu = this.childNodes[2];
    submenu.style.display ="none"
}

menu.forEach(e=>{
    e.addEventListener('mouseover',menuopen);
    e.addEventListener('mouseout',menuclose);
})

//전시 리스트 클릭 이벤트

const tab = document.querySelectorAll('.tab-li');
const tabArray = Array.from(tab);


function tabClick(){
    tabArray.forEach(e=>{
        e.classList.remove('active');
    })
    this.classList.add('active');
    
    for(let i=1; i<=9 ; i++)
        {
            let box = document.querySelector(`.box${i}`);
            if(tabArray[i-1]==this)
            {
                box.style.display="block";
            }else{
                box.style.display="none";
            }
        }
}
//다음부터는 for문 방식의 처리는 최대한 줄이고 
//이벤트 위임'방식을 공부 후 적용하도록.
//레이아웃을 미리 제대로 구성하기!

tabArray.forEach(click=>{
    click.addEventListener('click',tabClick);
});



//공지사항+보도자료 이벤트
const noticeTab = document.querySelectorAll('.notice-tab');
const noticeBodyList = document.querySelectorAll('.notice-body');


function noticeTabClick(){
    
    let noticeBody = this.childNodes[1];
    
    noticeBodyList.forEach(e=>{e.style.display = 'none'}); //전체 게시글 안보이게 하고
    
    noticeTab.forEach(e=>{e.classList.remove('tab-clicked')}); //공지or보도 색상 전체 회색으로 조정 
    
    this.classList.add('tab-clicked'); //클릭한 공지or보도의 색상을 검정으로
    noticeBody.style.display = "block"; //클릭한 탭메뉴의 자식클래스의 diplay를 보이게
    
}

noticeTab.forEach(e=>{
    e.addEventListener('click',noticeTabClick);
});



//오시는 길 좌우...하...


const howComeList=[
    {
        name: '서소문본관',
        address: `서울 중구 덕수궁길 61
(서소문동)`,
        phoneNum: '02-2124-8800(ars)'},
    {
        name: '북서울미술관',
        address: `서울 노원구 동일로 1238
(중계동)`,
        phoneNum: '02-2124-5248~9'},
    {
        name: '남서울미술관',
        address: `서울 관악구 남부순환로 2076
(남현동)`,
        phoneNum: '02-598-6246~7'},
    {
        name: '난지술창작스튜디오',
        address: `서울 마포구 하늘공원로 108-1
(상암동)`,
        phoneNum: '02-308-1071'},
    {
        name: 'SeMA창고',
        address: `서울 은평구 통일로 684
(서울혁신파크 5동)`,
        phoneNum: '02-2124-8935'},
    {
        name: '백남준기념관',
        address: `서울 종로구 종로53길 12-1
(창신동)`,
        phoneNum: '02-2124-5268'},
    {
        name: 'SeMA벙커',
        address: `서울 영등포구 여의대로 지하 76
(여의도동)`,
        phoneNum: '02-2124-8942'}    
]


let howName = document.querySelector('.how-box h1');
let howAddress = document.querySelector('.how-address');
let howNum = document.querySelector('.how-num');
let currentIndex = 0;

const howLeftBtn = document.querySelector('.left-button');
const howRightBtn = document.querySelector('.right-button');


function goLeftPlace(){
    
    if(currentIndex !=0)
        {
            howName.innerText = howComeList[currentIndex-1].name;
            howAddress.innerText = howComeList[currentIndex-1].address;
            howNum.innerText = howComeList[currentIndex-1].phoneNum;
            currentIndex --;
        }else{
            currentIndex =6;
            howName.innerText = howComeList[currentIndex].name;
            howAddress.innerText = howComeList[currentIndex].address;
            howNum.innerText = howComeList[currentIndex].phoneNum;
        }
}

function goRightPlace(){
    
    if(currentIndex !=6)
        {
            howName.innerText = howComeList[currentIndex+1].name;
            howAddress.innerText = howComeList[currentIndex+1].address;
            howNum.innerText = howComeList[currentIndex+1].phoneNum;
            currentIndex ++;
        }else{
            currentIndex =0;
            howName.innerText = howComeList[currentIndex].name;
            howAddress.innerText = howComeList[currentIndex].address;
            howNum.innerText = howComeList[currentIndex].phoneNum;
        }
}


howLeftBtn.addEventListener("click", goLeftPlace);
howRightBtn.addEventListener("click", goRightPlace);









