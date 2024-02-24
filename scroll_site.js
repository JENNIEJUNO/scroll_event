var window_box = document.querySelector('.window_box');
window_box.style.width = window.innerWidth + 'px'; // 가로 스크롤을 하기 위한 너비 지정

//header
var header = document.querySelector('header');
var header_ul = document.querySelector('.header_ul');
var header_li = document.querySelectorAll('.header_li');

//section0 // section1
var section = document.querySelectorAll('section');
var mouse_icon_box = document.querySelector('.mouse_icon_box');
var text_box1 = document.querySelector('.text_box1');
var text_box2 = document.querySelector('.text_box2');
var up_text = document.querySelectorAll('.up_text');
var down_text = document.querySelectorAll('.down_text');
//section2
var row_text_box = document.querySelector('.row_text_box');
//section3
var opacity_text = document.querySelector('.opacity_text');
//section5
var menu_box = document.querySelector('#menu_box');
mouse_icon_box.style.top = header.clientHeight + 'px';//mouse_icon 위치
mouse_icon_box.style.width = window.innerWidth * 0.3 + 'px';//mouse_icon 넓이
mouse_icon_box.style.height = mouse_icon_box.clientWidth + 'px';//mouse_icon 높이
for(let i = 0; i < section.length; i++){
    section[i].style.width = window.innerWidth + 'px';//section 너비
    section[i].style.height = window.innerHeight + 'px';//section 높이
}
text_box1.style.top = header.clientHeight + 'px';// text_box1 위치
text_box2.style.top = header.clientHeight + 'px';// text_box2 위치
for(let i = 0; i < up_text.length; i++){
    up_text[i].style.fontSize = window.innerWidth * 0.13 + 'px';// box1_up_text fontSize
    down_text[i].style.fontSize = window.innerWidth * 0.13 + 'px';// box1_down_text fontSize
}
row_text_box.style.fontSize = window.innerWidth * 0.2 + 'px';//row_text_box fontSize
opacity_text.style.fontSize = window.innerWidth * 0.15 + 'px';//opacity_text fontSize

//resize
window.addEventListener('resize', function(){
    window_box.style.width = window.innerWidth + 'px'; // 가로 스크롤을 하기 위한 너비 지정

    //section
    mouse_icon_box.style.top = header.clientHeight + 'px';//mouse_icon 위치
    mouse_icon_box.style.width = window.innerWidth * 0.3 + 'px';//mouse_icon 넓이
    mouse_icon_box.style.height = mouse_icon_box.clientWidth + 'px';//mouse_icon 높이
    for(let i = 0; i < section.length; i++){
        section[i].style.width = window.innerWidth + 'px';//section 너비
        section[i].style.height = window.innerHeight + 'px';//section 높이
    }
    text_box1.style.top = header.clientHeight + 'px';// text_box1 위치
    text_box2.style.top = header.clientHeight + 'px';// text_box2 위치
    for(let i = 0; i < up_text.length; i++){
        up_text[i].style.fontSize = window.innerWidth * 0.13 + 'px';// box1_up_text fontSize
        down_text[i].style.fontSize = window.innerWidth * 0.13 + 'px';// box1_down_text fontSize
    }
    row_text_box.style.fontSize = window.innerWidth * 0.2 + 'px';//row_text_box fontSize
    section[2].scrollLeft = 0;//이거 해야 사이즈 늘릴때 가로스크롤 초기화 됨
    opacity_text.style.fontSize = window.innerWidth * 0.15 + 'px';//opacity_text fontSize
    window_box.scrollTop = section[section_i].offsetTop; // 사이즈가 바뀌면 위치가 이상해져서 설정
})

//mouse_icon move
var currentPosition = 0; var direction = 1; var maxPosition = 10;
function mouse_icon_move(){
    if(currentPosition >= maxPosition){direction = -0.5;} else if(currentPosition <= 0){direction = 0.5;}
    currentPosition += direction;
    mouse_icon_box.style.transform = `translateY(${currentPosition}px)`;
    requestAnimationFrame(mouse_icon_move);
}
mouse_icon_move();

//Section Scroll
var section4 = document.querySelector('.section4');
var graph_li = document.querySelectorAll('.graph_li');
var graph_text_box = document.querySelectorAll('.graph_text_box');
var ball = document.querySelector('.ball');
var stopscroll = false; //section_i 가 4 일때 21000 동안 스크롤 중지
var section4_text_box = document.querySelector('.section4_text_box');

//section5
var menu_box_li = document.querySelectorAll('.menu_box_li');
var section5_sub_box = document.querySelector('.section5_sub_box');

//section6
var link_list_a = document.querySelectorAll('.link_list_a');
var scroll_icon_up = document.querySelector('.scroll_icon_up');
var scroll_icon_down = document.querySelector('.scroll_icon_down');
window_box.addEventListener('scroll', function(){
    //scroll_icon_up 유무
    if(section_i < 1)scroll_icon_up.style.opacity = '0'; else scroll_icon_up.style.opacity = '1';
    if(section_i == 6)scroll_icon_down.style.opacity = '0'; else scroll_icon_down.style.opacity = '1';
    if(section_i == 2){
        setTimeout(() => {
            for(let i = 0; i < header_li.length; i++){
                header_li[i].style.color = 'white';
                header_li[i].addEventListener('mouseout', function(){this.style.color = 'white';})
            }
        }, 500);
    }
    else{
        for(let i = 0; i < header_li.length; i++){
            header_li[i].style.color = 'black';
            header_li[i].addEventListener('mouseover', function(){this.style.color = 'white';})
            header_li[i].addEventListener('mouseout', function(){this.style.color = 'black';})
        }
    }
    
    //mouse_icon_box 사라졌다가 나타났다가
    if(section_i >= 4){mouse_icon_box.style.display = 'none';}
    else{mouse_icon_box.style.display = 'block';}// 여기 수정 실패함

    // 화면 펼쳐짐 setTimeout 중복 실행 방지
    if(section_i == 4 && !stopscroll){stoptime = setTimeout(()=>{stopscroll = true}, 15500)}
    else if(section_i != 4){stopscroll = false;}

    if(section_i == 4){
        header.style.height = 0;
        setTimeout(()=>{section4_text_box.innerHTML = 'Go';}, 15400)//text 변환
        setTimeout(()=> {section4.style.width = '100vw';}, 500); // 꽉 차는 화면
        
        //그래프
        setTimeout(()=>{// 그래프 올라오는
            for(let i = 0; i < graph_li.length; i++){
                graph_li[i].style.height = (i + 1) * 10 + 'vh';
            }
        }, 2000);
        setTimeout(()=>{// 그래프 위 카운트
            for(let i = 0 ; i < graph_text_box.length; i++){
                for(let j = 0; j < (i + 1) * 70; j++){
                    setTimeout(()=>{
                        graph_text_box[i].innerHTML = j;//resize를 하면 숫자가 다시 카운트 됨
                    }, 5 * j);
                }
            }
        }, 2100);

        //ball
        ball.style.animationName = 'ball';
        setTimeout(()=>{//ball opacity
            ball.style.opacity = 1;
            setTimeout(()=>{//ball 커짐
                ball.style.width = '15vw';
                ball.style.height = '15vw';
                let j = 1;
                var ball_count = setInterval(()=>{//ball_count
                    ball.innerHTML = j;// 중복 실행됨 해결 해야함
                    j++;
                    if(j > 5) clearInterval(ball_count);
                }, 1000)
            }, 7000)
        }, 2500)
    }
    else{
        header.style.height = 'auto';
        section4.style.width = 0;
        section4_text_box.innerHTML = 'Scroll Lock';

        //graph
        for(let i = 0; i < graph_li.length; i++){//기둥 초기화
            graph_li[i].style.height = 0;
        }

        //ball
        ball.style.opacity = 0;
        ball.style.width = '6vw';
        ball.style.height = '6vw';
        ball.innerHTML = null;
        ball.style.animationName = null;
    }

    if(section_i == 5){
        setTimeout(()=>{
            for(let i = 0; i < menu_box_li.length; i++){
                setTimeout(()=>{
                    menu_box_li[i].style.marginTop = '0';
                }, i * 100)
            }
        }, 500);
    }
    else{
        for(let i = 0; i < menu_box_li.length; i++){
            menu_box_li[i].style.marginTop = '5vw';
        }
        section5_sub_box.style.backgroundColor = 'pink';
        section5_sub_box.style.width = '100vw';
        section5_sub_box.style.height = '100vh';
        section5_sub_box.style.borderRadius = '0';
    }

    //section6
    if(section_i == 6){//지그재그 link 아이콘
        setTimeout(()=>{
            for(let i = 0; i < link_list_a.length; i++){
                if((i + 1) % 2 != 0) link_list_a[i].style.marginTop = '10vh';
                else link_list_a[i].style.marginTop = '-10vh';
            }
        }, 500)
    }
    else{for(let i = 0; i < link_list_a.length; i++) link_list_a[i].style.marginTop = '0';}
})

var section_i = 0; // 초기값이 17로 나와서 0으로 초기화 시켜줌(왜 17이 초기 값인지 이유 모름);
var flag = true; // 섹션씩 넘어갈때 너무 휙휙 넘어가는거 방지

window.addEventListener('wheel', function(e){
    e.preventDefault();
    e.stopPropagation();
    if(!flag) return;
    flag = false;
    setTimeout(() => {flag = true}, 400); // 스크롤이 휙휙 넘어가는거 방지

    //section_i 값을 계산해서 위치에 따른 스크롤
    if(section_i == 4 && !stopscroll) return;
    else if(section_i < section.length - 1 && e.deltaY > 0){section_i++;}
    else if(section_i > 0 && e.deltaY < 0){section_i--;}

    window_box.scrollTo({top:section[section_i].offsetTop, behavior:'smooth'});
    //window_box.localStorage.setItem('section_i', section_i); //section_i 값을 불러옴
},{passive:false})

var x = false;
section[2].addEventListener('scroll', function(){//가로 스크롤 구현
    x = this.clientWidth === this.scrollWidth - this.scrollLeft;
})

var mouse_icon_i = 1.5; var opacity_text_i = 1.5;
window_box.addEventListener('wheel', function(e){//가로스크롤 구현, opacity 구현
    //가로스크롤
                                                    //section_i == 2 를 추가해 주어야 다시 역감기 가능
    if(section_i == 2 && (!x && e.deltaY > 0) || (section_i == 2 && section[2].scrollLeft != 0 && e.deltaY < 0)){
        section[2].scrollLeft += e.deltaY;
        e.preventDefault();
        e.stopPropagation();
    }

    //opacity
    else if(section_i == 3 && ((opacity_text_i >= -0.8 && e.deltaY > 0) || 
    (mouse_icon_i <= 1.5 && e.deltaY < 0))){
        if(e.deltaY > 0 && mouse_icon_i >= 0) mouse_icon_i -= 0.1;
        else if(e.deltaY > 0 && (mouse_icon_i <= 0 && opacity_text_i >= -0.8)) opacity_text_i -= 0.1;
        else if(e.deltaY < 0 && (opacity_text_i <= 1.5)) opacity_text_i += 0.1;
        else if(e.deltaY < 0 && (opacity_text_i >= 1.5 && mouse_icon_i <= 1.5)) mouse_icon_i += 0.1;
        mouse_icon_box.style.opacity = mouse_icon_i;
        opacity_text.style.opacity = opacity_text_i;
        e.preventDefault();
        e.stopPropagation();
    }
},{passive:false})

for(let i = 0; i < header_li.length; i++){
    header_li[i].addEventListener('click', function(){
        section_i = i;
        if(section_i >= 4){
            mouse_icon_i = 0;
            opacity_text_i = -0.8;
            mouse_icon_box.style.opacity = mouse_icon_i;
            opacity_text.style.opacity = opacity_text_i;
        }
        else{
            mouse_icon_i = 1.5; mouse_icon_box.style.opacity = mouse_icon_i;//이거 안하면 투명하게 남아있음
            opacity_text_i = 1.5; opacity_text.style.opacity = opacity_text_i;//이거 안하면 투명하게 남아있음
        }
        section[2].scrollLeft = 0; // 이거 안하면 가로 스크롤 중간에 누르면 그 위치에 그대로 남아있음
        window_box.scrollTop = section[i].offsetTop;
    })
}

//section5 click event
var menu_sub_box_li = document.querySelectorAll('.menu_sub_box_li');
for(let i = 0; i < menu_sub_box_li.length; i++){
    menu_sub_box_li[i].addEventListener('click', function(){
        //menu_sub_box_li 0
        if(i == 0) section5_sub_box.style.backgroundColor = 'gray';
        else if(i == 1) section5_sub_box.style.backgroundColor = 'skyblue';
        else if(i == 2) section5_sub_box.style.backgroundColor = 'purple';
        else if(i == 3) section5_sub_box.style.backgroundColor = 'pink';
        //menu_sub_box_li 1
        if(i == 4) section5_sub_box.style.width = '10%';
        else if(i == 5) section5_sub_box.style.width = '40%';
        else if(i == 6) section5_sub_box.style.width = '70%';
        else if(i == 7) section5_sub_box.style.width = '100%';
        //menu_sub_box_li 2
        if(i == 8) section5_sub_box.style.height = '10%';
        else if(i == 9) section5_sub_box.style.height = '40%';
        else if(i == 10) section5_sub_box.style.height = '70%';
        else if(i == 11) section5_sub_box.style.height = '100%';
        //menu_sub_box_li 3
        if(i == 12) section5_sub_box.style.borderRadius = '50%';
        else if(i == 13) section5_sub_box.style.borderRadius = '30%';
        else if(i == 14) section5_sub_box.style.borderRadius = '10%';
        else if(i == 15) section5_sub_box.style.borderRadius = '0%';
        //menu_sub_box_li 4
        if(i == 16) section5_sub_box.style.transition = '3s';
        else if(i == 17) section5_sub_box.style.transition = '2s';
        else if(i == 18) section5_sub_box.style.transition = '1s';
        else if(i == 19) section5_sub_box.style.transition = '0s';
    })
}
