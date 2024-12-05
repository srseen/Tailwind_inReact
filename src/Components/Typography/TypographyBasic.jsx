/*
    exp.<h1 className="text-{color} text-size font-{weight} {style}">Hello World</h1>"

    **list**
        Font Family "ใช้ตอน config จะได้ง่าย"

        1.Text Color
        2.Font Size 
        3.Font Weight
        4.Font Style
        
        Font Smoothing "ทำให้ font smooth ขึ้น"

        Font Variant Numeric "ตัวอักษรพิเศษ"
        
*/

function TypographyBasic() {
  return (
    <>
      <h1 className="text-red-500 text-3xl font-medium italic">Hello World</h1>
    </>
  );
}

export default TypographyBasic;
