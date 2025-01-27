import React from "react";
import Navbar from "@/components/Navbar";

function Desclimer() {
  const htmlFile = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
    <style>
    [data-custom-class='body'], [data-custom-class='body'] * {
            background: transparent !important;
          }
  [data-custom-class='title'], [data-custom-class='title'] * {
            font-family: Arial !important;
  font-size: 26px !important;
  color: #000000 !important;
          }
  [data-custom-class='subtitle'], [data-custom-class='subtitle'] * {
            font-family: Arial !important;
  color: #595959 !important;
  font-size: 14px !important;
          }
  [data-custom-class='heading_1'], [data-custom-class='heading_1'] * {
            font-family: Arial !important;
  font-size: 19px !important;
  color: #000000 !important;
          }
  [data-custom-class='heading_2'], [data-custom-class='heading_2'] * {
            font-family: Arial !important;
  font-size: 17px !important;
  color: #000000 !important;
          }
  [data-custom-class='body_text'], [data-custom-class='body_text'] * {
            color: #595959 !important;
  font-size: 14px !important;
  font-family: Arial !important;
          }
  [data-custom-class='link'], [data-custom-class='link'] * {
            color: #3030F1 !important;
  font-size: 14px !important;
  font-family: Arial !important;
  word-break: break-word !important;
          }
  </style>
        
  
        <div data-custom-class="body">
        <div><div align="center" class="MsoNormal" data-custom-class="title" style="text-align: left; line-height: 1.5;"><a name="_4r5vko5di6yg"></a><strong><span style="line-height: 150%; font-size: 26px;">DISCLAIMER</span></strong></div><div align="center" class="MsoNormal" style="text-align:center;line-height:150%;"><a name="_l2jmcqu2bv4x"></a></div><div align="center" class="MsoNormal" data-custom-class="subtitle" style="text-align: left; line-height: 150%;"><br></div><div align="center" class="MsoNormal" data-custom-class="subtitle" style="text-align: left; line-height: 150%;"><span style="color: rgb(127,127,127); font-size: 15px; text-align: justify;"><strong>Last updated </strong><bdt class="block-container question question-in-editor" data-id="f06b270d-4b70-bc53-bef4-2d8996dff70b" data-type="question"><strong>May 19, 2024</strong></bdt></span></div><div class="MsoNormal" style="text-align: justify; line-height: 1.5;"><br></div><div class="MsoNormal" style="text-align: justify; line-height: 1.5;"><br></div><div class="MsoNormal" data-custom-class="heading_1"><a name="_xs0r05tcjblb"></a><strong><span style="line-height: 115%; font-size: 19px;">WEBSITE DISCLAIMER</span></strong></div></div><div style="line-height: 1.2;"><br></div><div><div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span style="color: rgb(89, 89, 89); font-size: 15px;">The information provided by <bdt class="block-container question question-in-editor" data-id="1e91c6ac-db3b-ab40-09dc-333e7d471e6c" data-type="question">IBPD Professional Development Foundation UK</bdt> (<bdt class="block-component"></bdt>'we', 'us', or 'our'<bdt class="else-block"></bdt>) on <bdt class="block-component"></bdt><span style="color: rgb(0, 58, 250);"><bdt class="question"><a href="http://www.ibpd.org" target="_blank" data-custom-class="link">http://www.ibpd.org</a></bdt></span> (the <bdt class="block-component"></bdt>'Site'<bdt class="else-block"></bdt>)<bdt class="block-component"></bdt> </bdt>is for general informational purposes only. All information on <span style="color: rgb(89, 89, 89); font-size: 15px;"><bdt class="block-component"></bdt>the Site<bdt class="block-component"></bdt> </bdt></span>is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on <span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="color: rgb(89, 89, 89); font-size: 15px;"><bdt class="block-component"></bdt>the Site<bdt class="block-component"></bdt></bdt></span></span>. UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF <span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="color: rgb(89, 89, 89); font-size: 15px;"><bdt class="block-component"></bdt>THE SITE<bdt class="block-component"></bdt> </bdt></span></span>OR RELIANCE ON ANY INFORMATION PROVIDED ON <span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="color: rgb(89, 89, 89); font-size: 15px;"><bdt class="block-component"></bdt>THE SITE<bdt class="block-component"></bdt></bdt></span></span></span>. YOUR USE OF <span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="color: rgb(89, 89, 89); font-size: 15px;"><bdt class="block-component"></bdt>THE SITE<bdt class="block-component"></bdt> </bdt></span></span></span>AND YOUR RELIANCE ON ANY INFORMATION ON <span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="color: rgb(89, 89, 89); font-size: 15px;"><bdt class="block-component"></bdt>THE SITE<bdt class="block-component"></bdt></bdt></span></span></span> IS SOLELY AT YOUR OWN RISK.</span></div></div><div style="line-height: 1.2;"><br></div><div><div class="MsoNormal"><a name="_x1u8x12nt00e"></a></div><bdt class="block-container if" data-type="if" id="25d6783f-eaa7-3465-7bd8-31e107cc0931"><bdt data-type="conditional-block"><bdt class="block-component" data-record-question-key="external_disclaimer_option" data-type="statement"></bdt></bdt><div class="MsoNormal"><a name="_wfmrqujylbbj"></a></div><bdt class="block-container if" data-type="if" id="098cd9ba-027e-0afb-ec22-41e16cb68d79"><bdt data-type="conditional-block"><bdt class="block-component" data-record-question-key="professional_disclaimer_option" data-type="statement"></bdt></bdt></div><div><bdt class="block-component"></bdt></bdt><bdt data-type="conditional-block" style="text-align: start;"><bdt data-type="body"><div class="MsoNormal"><bdt class="block-component"></bdt></bdt></span></bdt></bdt></bdt></bdt></bdt></span></bdt></bdt></bdt></div><style>
        ul {
          list-style-type: square;
        }
        ul > li > ul {
          list-style-type: circle;
        }
        ul > li > ul > li > ul {
          list-style-type: square;
        }
        ol li {
          font-family: Arial ;
        }
      </style>
        </div>
    </body>
    </html>
    `;
  return (
    <div>
      <Navbar />
      <div
        className=" p-10"
        dangerouslySetInnerHTML={{ __html: htmlFile }}
      ></div>
    </div>
  );
}

export default Desclimer;
