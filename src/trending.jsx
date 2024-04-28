import  React,{useState, useCallback, useEffect} from 'react';
function Trend(){

    let data = ['product-10.jpg','product-4.jpg','AdobeStock_102766593_Preview.jpeg',
    'product026ii.jpg','isme-removebg-preview.png','1655749703_goldpiercing.jpg','ice1 (1).png','large-amazon-fire-hd-8-tablet-alexa-2017-16-gb-black.jpg','fashion (2).jpg', 'fashion (5).jpg','b16.jpg'];
    
    let Color = useCallback((img) => {
        const [colored, setColored] = useState('');

        useEffect(() => {
            const image = new Image();

            image.onload = function () {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d', { willReadFrequently: true });

                canvas.width = 1;
                canvas.height = 1;
                context.drawImage(image, 0, 0, image.width, image.height);

                const imageData1 = context.getImageData(0, 0, canvas.width, canvas.height);
                const pixelData = imageData1.data;

                const transparent = pixelData.some((value, index) => index % 4 === 3 && value < 255);

                if (transparent) {
                    context.drawImage(image, 0, 0, 1, 2);
                } else {
                    context.drawImage(image, 0, 0, image.width, image.height);
                }

                const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                const dominantColor = getDominantColor(imageData);
                const match = dominantColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
                const r = parseInt(match[1]);
                const g = parseInt(match[2]);
                const b = parseInt(match[3]);
                const luminance = 0.299 * r / 255 + 0.587 * g / 255 + 0.114 * b / 255;

                setColored([dominantColor, luminance <= 0.5]);
            };

            console.log('waiting');
            image.src = img;

            // return () => {
            //     // Cleanup code if needed
            // };
        }, [img]);

        function getDominantColor(imageData) {
            const data = imageData.data;
            const colorCounts = {};

            for (let i = 0; i < data.length; i += 4) {
                const color = `rgb(${data[i]}, ${data[i + 1]}, ${data[i + 2]})`;
                colorCounts[color] = (colorCounts[color] || 0) + 1;
            }

            const sortedColors = Object.keys(colorCounts).sort((a, b) => colorCounts[b] - colorCounts[a]);
            return sortedColors[0];
        }

        return colored;
    }, []);
    return(<div className='w-[100%] h-max'>
    <div className="contenthead">

<h1 className="text-[220%] font-sans font-[500]">Trending</h1>
{/* <div className="contenthead-tool">
    <button className="bg-gray-100 text-center w-[5.9rem] rounded-[0.95rem] flex p-[11.5px] h-[7px] items-center justify-center ">Filters</button>
    <button className="bg-gray-100 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="svf" width="40" height="40" fill="currentColor"  viewBox="0 0 16 16">  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /></svg></button>
</div> */}
</div>
<div className="w-[100%] flex px-2 flex-wrap justify-between">
    {data && data.map((e,i)=>(

<div className="w-[49%] relative flex items-center justify-around max-w-[520px] h-[12rem]  rounded-[2rem] shadow mt-3" style={Color(e)[0] !==''?{background: Color(e)[0]}:{}} key={i}>
    <div className='ml-[1rem]'>
    <h1 className={((Color(e)[1]  === true)?'text-white':'text-black') + ' text-[180%]'}>Supper Skinny</h1>
    <p className={((Color(e)[1]  === true)?'text-white':'text-black') }>Your Choices</p>
    </div>
    <img className='h-[100%] mr-[1rem]' src={e} style={{aspectRatio:'20/26'}} alt="" />
    <button className="absolute top-[10%] right-[3%] bg-white w-[2rem] h-[2rem] rounded-xl flex items-center justify-center"><svg style={{transform: 'rotateZ(-50deg)'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg></button>
</div>
    ))}


</div>
    </div>)
}
export default Trend;