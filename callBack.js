function explainCallBack(name, age, task){
    console.log('Hello', name);
    console.log('Your age', age);
    task();
}

function washHand(){
    console.log('Wash your hand with soap');
}

function takeShower(){
    console.log('Take Shower');
}

function scrollFaceBook(){
    console.log("Scroll facebook but don't like any post" );
}

explainCallBack('Ramu Laal', 17, washHand);
explainCallBack('Kamu Laal', 16, takeShower);
explainCallBack('Damu Laal', 25, scrollFaceBook);