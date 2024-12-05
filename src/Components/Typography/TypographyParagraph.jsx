/*
    exp.<h1 className="text-{color} text-size font-{weight} {style}">Hello World</h1>"

    **list**

    1.text Indent "ย่อหน้าบรรทัดแรก" 
        className="indent-0"
    2.Text Align "จัดกึ่งกลางข้อความ"
        className="text-center"
    3.Text Wrap "ทำให้พาราการฟอยู่ในกรอบ"
        className="text-wrap"
    4.Line Clamp "ใช้สำหรับตกแต่ง มีผลทำให้สามารถกำหนดบรรทัดที่แสดงได้"
        className="line-clamp-3"
    5.Line Height "ยืดระยะห่างระหว่างบรรทัด" 
        className="leading-4"
    6.Text Overflow "ตัดส่วนเกินพารากราฟ"
        className="text-ellipsis overflow-hidden"
*/

function TypographyParagraph() {
  return (
    <>
      <p className="container mx-auto line-clamp-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, autem sit
        libero distinctio voluptatem dignissimos. Nisi, et rerum repellendus
        iure cupiditate quisquam illum ex cum esse hic consequuntur inventore
        corrupti.
      </p>
    </>
  );
}

export default TypographyParagraph;
