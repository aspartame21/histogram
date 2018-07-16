var A = [5, 12, 18, 8],
    Px = 500,
    Py = 400,
    D = 50,
    Dc = 30,
    Ds = 50,
    x0 = 120,
    y0 = 420

var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d')

var S = (A.max() - A.min())/Py,
    I = Py/D

ctx.clearRect(0, 0, canvas.width, canvas.height)

ctx.moveTo(x0, y0)
ctx.lineTo(x0+Px, y0)
ctx.stroke()

ctx.moveTo(x0, y0)
ctx.lineTo(x0, y0-Py)
ctx.stroke()

for(i=1; i<=I; i++) {
    ctx.moveTo(x0, y0-D*i)
    ctx.lineTo(x0-3, y0-D*i)
    ctx.stroke()
    ctx.fillText(A.min() + i*D*S, x0-40, y0-D*i-10)
}

ratioY = Py/A.max()
for(i=1; i<=A.length; i++){
    ctx.fillRect(x0+(Ds+Dc)*i, Py-A[i-1]*ratioY, Dc, A[i-1]*ratioY);
}

