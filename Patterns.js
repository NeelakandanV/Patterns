// Right Angled Triangle Pattern
function RightTriangle(num){
    let star;
    for(let i=1;i<=num;i++){
        star="* ".repeat(i)
        console.log(star)
    }
    console.log("\n")
}


// Pyramid Pattern
function Pyramid(num){
    let star;
    let space;
    for(let i=1;i<=num;i++){
        star = "* ".repeat(i)
        space = " ".repeat(num-i)
        console.log(space+star)
    }
    console.log("\n")
}


// Inverse Right Angled Triangle Pattern
function InverseRightTriangle(num){
    let star;
    for(let i=num;i>=1;i--){
        star="* ".repeat(i)
        console.log(star)
    }
    console.log("\n")
}



// Inverse Pyramid Pattern
function InversePyramid(num){
    let star;
    let space;
    for(let i=num;i>=1;i--){
        star = "* ".repeat(i)
        space = " ".repeat(num-i)
        console.log(space+star)
    }
    console.log("\n")
}


// Square Pattern
function square(num){
    let star;
    for(let i=1;i<=num;i++){
        star="* ".repeat(num)
        console.log(star)
    }
    console.log("\n")
}


// Hollow Square Pattern
function HollowSquare(num){
    let star;
    for(let i=1;i<=num;i++){
        if(i==1 || i==num){
            star="* ".repeat(num)
            console.log(star)
        }
        if(i>1 && i<num){
            star="* "+"  ".repeat(num-2)+"*"
            console.log(star)
        }
    }
    console.log("\n")
}


// All Patterns
const patterns = (num)=>{
    RightTriangle(num)
    Pyramid(num)
    InverseRightTriangle(num)
    InversePyramid(num)
    square(num)
    HollowSquare(num)
}
patterns(5)