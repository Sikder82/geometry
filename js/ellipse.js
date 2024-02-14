document.getElementById('ellipseBtn').addEventListener('click', function(){
    function calculateRectangle(a , b){
        if(!isNaN(a) && !isNaN(b)){
            return result = 3.14159 * a * b;
        }else{
            return 'invalid input';
        }
    }
    const aofEllipse=document.getElementById('aofEllipse').value;
    const bofEllipse=document.getElementById('bofEllipse').value;
    const areaOfEllipse=document.getElementById('areaOfEllipse');
    const area = calculateRectangle(aofEllipse, bofEllipse);
    areaOfEllipse.innerText = area;
});