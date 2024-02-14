document.getElementById('rectanglebtn').addEventListener('click', function(){
    function calculateRectangle(a , b){
        if(!isNaN(a) && !isNaN(b)){
            return result = a * b;
        }else{
            return 'invalid input';
        }
    }
    const widthofRectangle=document.getElementById('widthofRectangle').value;
    const lengthofRectangle=document.getElementById('lengthofRectangle').value;
    const areaOfRectangle=document.getElementById('areaOfRectangle');
    const area = calculateRectangle(widthofRectangle, lengthofRectangle);
    areaOfRectangle.innerText = area;
});