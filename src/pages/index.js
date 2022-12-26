import * as React from "react";
import Layout from "../components/Layout";

const data = [
  {
    title: "2020 оны байдлаар",
  },
  {
    title: "2015 оны байдлаар",
  },
  {
    title: "2010 оны байдлаар",
  },
];

const IndexPage = (props) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <Layout>
      <div className="my-10">
        <h1 className="font-bold mb-10 text-3xl">Цөлжилт гэж юу вэ?</h1>
        <p className="font-light mb-10 text-justify">
          Desertification буюу "desert" "fication" гэдэг англи үгийг үг зүйн
          хувьд авч үзвэл цөл бий болгох гэсэн утга санааг илэрхийлдэг байна.
          Цөлжилт бол удаан хугацаагаар үргэлжлэх газар доройтох үйл явц, цөл
          бол энэ үйл явцын төгсгөлийн үе шат гэж үздэг. Цөлжилт нь байгалийн
          хүчин зүйл болон хүний үйл ажиллагааны олон талт нөлөөнөөс хамаардаг
          учир цөлжилтийн нийтлэг нэгдсэн тодорхойлолт гаргахад нилээд
          хүндрэлтэй юм. <br />
          <br />
          Орчин үед Цөлжилттэй тэмцэх олон улсын конвенцээс гаргасан
          тодорхойлолтыг илүү баримтлах болжээ. Тус конвенцид зааснаар "Уур
          амьсгалын өөрчлөлт, хүний үйл ажиллагаа хавсарсан олон янзын хүчин
          зүйлсийн нөлөөгөөр хуурай, заримдаг хуурай, хуурайвтар, чийг дутмаг
          нутаг оронд газар орчин доройтохыг цөлжилт гэнэ" гэж тодорхойлсон
          байдаг.
        </p>

        <h1 className="font-bold mb-10 text-3xl">
          Монгол орны цөлжилтийн байдал
        </h1>
        <div className="flex items-center space-x-10">
          {data?.map((d, index) => (
            <div
              key={`tab-${index}`}
              onClick={() => {
                setActiveTab(index);
              }}
              className={`px-4 py-2 font-bold rounded ${
                activeTab === index
                  ? "bg-gradient-to-r from-[#9d3801] text-white to-[#cc6600]"
                  : "cursor-pointer"
              }`}
            >
              {d?.title}
            </div>
          ))}
        </div>

        {activeTab === 0 && (
          <div>
            <img
              src="/images/2020.jpeg"
              className="max-w-full w-2/3 mx-auto my-10 block"
            />
            <p className="font-light mb-10 text-justify">
              <strong className="font-bold">Цөлжилтийн өнөөгийн байдал.</strong>{" "}
              Монгол орон нь газар зүйн байршил, эх газрын эрс тэс уур амьсгал
              зэргээс хамааран дэлхийн дулаарал, уур амьсгалын өөрчлөлтөд
              эрчимтэй өртөөд байгаа 10 орны нэг бөгөөд уур амьсгалын
              өөрчлөлтийн нөлөөгөөр дулааны улирлын хур тунадасны хэмжээ ихээхэн
              буурч хуурайших, гандуу болох, цөлжих явц илүү ажиглагдаж байна.
              Сүүлийн 80 жилийн уур амьсгалын үндсэн үзүүлэлтийн ажиглалтаар
              Монгол орны хэмжээнд дундчилсан байдлаар жилийн агаарын температур
              2.25 градусаар дулаарч, хур тунадасны хэмжээ 8 хувиар буураад
              байна (MARCC, 2014). <br />
              <br />
              2020 оны байдлаар Монгол орны цөлжилтийн үнэлгээгээр нийт нутаг
              дэвсгэрийн 76.9% буюу 120.3 сая га талбай доройтсон. Үүнээс нэн
              хүчтэй 4.7%, хүчтэй 18.6%-ийг эзлэх ба засаг захиргааны нэгжийн
              хувьд Дорноговь, Дундговь, Өмнөговь, Говь-сүмбэр, Говь-Алтай,
              Баянхонгор, Өвөрхангай, Төв аймгийн нийт газар нутгийн 50-70%
              цөлжилт, газрын доройтолд өртсөн.
            </p>

            <table
              className="table-auto"
              width="100%"
              border="0"
              cellpadding="2"
              cellspacing="2"
            >
              <thead>
                <tr className="even:bg-gray-100">
                  <th className="border">
                    <div align="center">
                      <em>Цөлжилтийн үнэлгээ хийсэн он</em>
                    </div>
                  </th>
                  <th className="border">
                    <div align="center">
                      <em>Сул илэрсэн нутаг</em>
                    </div>
                  </th>
                  <th className="border">
                    <div align="center">
                      <em>Дунд зэрэг илэрсэн нута</em>
                    </div>
                  </th>
                  <th className="border">
                    <div align="center">
                      <em>Хүчтэй илэрсэн нутаг</em>
                    </div>
                  </th>
                  <th className="border">
                    <div align="center">
                      <em>Нэн хүчтэй илэрсэн нутаг</em>
                    </div>
                  </th>
                  <th className="border">
                    <div align="center">
                      <em>Нийт нутаг дэвсгэрт эзлэх %</em>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-gray-100">
                  <td className="border">
                    <div align="center">2006 он</div>
                  </td>
                  <td className="border">
                    <div align="center">23.0</div>
                  </td>
                  <td className="border">
                    <div align="center">26.0</div>
                  </td>
                  <td className="border">
                    <div align="center">18.0</div>
                  </td>
                  <td className="border">
                    <div align="center">5.0</div>
                  </td>
                  <td className="border">
                    <div align="center">72.0</div>
                  </td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border">
                    <div align="center">2010 он</div>
                  </td>
                  <td className="border">
                    <div align="center">35.3</div>
                  </td>
                  <td className="border">
                    <div align="center">25.9</div>
                  </td>
                  <td className="border">
                    <div align="center">6.7</div>
                  </td>
                  <td className="border">
                    <div align="center">9.9</div>
                  </td>
                  <td className="border">
                    <div align="center">77.8</div>
                  </td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border">
                    <div align="center">2015 он</div>
                  </td>
                  <td className="border">
                    <div align="center">24.1</div>
                  </td>
                  <td className="border">
                    <div align="center">29.8</div>
                  </td>
                  <td className="border">
                    <div align="center">16.8</div>
                  </td>
                  <td className="border">
                    <div align="center">6.1</div>
                  </td>
                  <td className="border">
                    <div align="center">76.8</div>
                  </td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border">
                    <div align="center">2020 он</div>
                  </td>
                  <td className="border">
                    <div align="center">31.5</div>
                  </td>
                  <td className="border">
                    <div align="center">22.1</div>
                  </td>
                  <td className="border">
                    <div align="center">18.6</div>
                  </td>
                  <td className="border">
                    <div align="center">4.7</div>
                  </td>
                  <td className="border">
                    <div align="center">76.9</div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-right italic my-5">
              Эх сурвалж: Монгол орны цөлжилтийн атлас, 2020 он
            </div>
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <img
              src="/images/2015.jpeg"
              className="max-w-full w-2/3 mx-auto my-10 block"
            />
            <p className="font-light mb-10 text-justify">
              <strong className="font-bold">
                Цөлжилт, газрын доройтлын төлөв байдал.
              </strong>{" "}
              Монгол орны цөлжилт, газрын доройтлыг байгаль, уур амьсгал,
              нийгмийн гол үзүүлэлтүүд бүхий хүчин зүйлүүдэд тулгуурлан хийсэн
              үнэлгээгээр 2015 оны байдлаар нийт нутаг дэвсгэрийн 76.9 хувь нь
              цөлжилт, газрын доройтолд өртөөд байгааг тогтоосон бөгөөд үүнээс
              сул 24.1%, дунд зэрэг 29.7%, хүчтэй 17.0%, нэн хүчтэй зэрэглэлээр
              доройтсон газар 6.1%-ийг тус тус эзэлж байна. <br />
              <br />
              Цөлжилт газрын доройтолд их нууруудын хотгор, нууруудын хөндий,
              өмнийн болон дорнын говь нутаг хамрагдаж байсан өмнөх судалгааны
              үр дүн бас л хэвээр хадгалагдан үлдэж байгаагийн зэрэгцээ өмнөх
              үеийн судалгаагаар тогтоогдсон Орхон-Сэлэнгийн сав нутаг, Хэрлэн
              голын сав, дорнод монголын хээрийн муж, төв халхын тэгш
              өндөрлөгийн хэмжээнд доройтлын үйл нэмэгдсэн дүнтэй байна. <br />
              <br />
              Эдгээр судалгааны дүнгүүдийг монгол орны хэмжээнд урьд өмнө
              хийгдсэн судалгааны үр дүнтэй харьцуулан үзвэл цөлжилт, газрын
              доройтлын төлөв, сүүлийн 15 жилийн хугацаанд улам л нэмэгдэх
              хандлага ажиглагдаж, улмаар доройтлын дунд, хүчтэй, нэн хүчтэй
              зэрэглэлийн хамрах талбай тэлж байгаа дүр төрхтэй байна. Цөлжилт,
              газрын доройтол 2015 оны төлөв байдлыг ижил төсөөтэй аргазүйгээр
              гүйцэтгэсэн 2010 оны үнэлгээний үр дүнтэй харьцуулан үзвэл нийт
              доройтсон газрын талбай 1%-иар, нэн хүчтэй зэрэглэлд хамрагдах
              газар 3.8%-иар тус тус буурсан хэдий ч сул зэрэглэлд хамрагдах
              газар 11.2%-иар хасагдаж, дунд, хүчтэй зэрэглэлд хамрагдах газар
              3.9, 10.2 хувиар тус тус нэмэгджээ. Өөрөөр хэлбэл, сүүлийн 5 жилд
              сул, дунд зэрэглэлд хамрагдах нутгаас 6.4% нь хүчтэй зэрэглэлд
              шилжиж дотоод аюул нь нэмэгдсэн гэсэн үг юм. <br />
              <br />
              Цөлжилт нь хуурай, гандуу, чийг дутмаг бүс нутагт явагдах газрын
              доройтол бөгөөд энэ ойлголтын хүрээнд авч үзэх нь зохимжтой юм.
              Эдгээр хоёр ойлголтыг уур амьсгалын чийгшлийн бүсээр нь ялган
              тодорхойлбол, нийт нутаг дэвсгэрийн 64.7 хувьд нь цөлжилтийн үйл
              явц илэрч, харин газрын доройтол 12.2 хувьд нь явагдаж байна.
            </p>

            <table width="100%" border="0" cellpadding="2" cellspacing="2">
              <thead>
                <tr className="even:bg-gray-100">
                  <th className="border">
                    <div align="center">
                      <em>Зэрэг</em>
                    </div>
                  </th>
                  <th className="border">
                    <div align="center">
                      <em>Цөлжилт, эзлэх хувь</em>
                    </div>
                  </th>
                  <th className="border">
                    <div align="center">
                      <em>Газрын доройтол, эзлэх хувь</em>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-gray-100">
                  <td className="border">
                    <div align="center">Сул</div>
                  </td>
                  <td className="border">
                    <div align="center">20.6</div>
                  </td>
                  <td className="border">
                    <div align="center">3.5</div>
                  </td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border">
                    <div align="center">Дунд</div>
                  </td>
                  <td className="border">
                    <div align="center">24.2</div>
                  </td>
                  <td className="border">
                    <div align="center">5.5</div>
                  </td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border">
                    <div align="center">Хүчтэй&nbsp;</div>
                  </td>
                  <td className="border">
                    <div align="center">15.0</div>
                  </td>
                  <td className="border">
                    <div align="center">2.0</div>
                  </td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border">
                    <div align="center">Нэн хүчтэй</div>
                  </td>
                  <td className="border">
                    <div align="center">4.9</div>
                  </td>
                  <td className="border">
                    <div align="center">1.2</div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-right my-5 italic">
              Эх сурвалж: Монгол орны байгаль орчин, Боть 1
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <img
              src="/images/2010.jpeg"
              className="max-w-full w-2/3 mx-auto my-10 block"
            />
            <p className="font-light mb-10 text-justify">
              <strong className="font-bold">
                Цөлжилт, газрын доройтлын төлөв байдал.{" "}
              </strong>
              2010 оны цөлжилтийн нэгдсэн зургаас харвал Монгол улсын нийт нутаг
              дэвсгэрийн 77.8 хувь нь их, бага хэмжээгээр цөлжилт, газрын
              доройтлын үйл явцад өртсөн бөгөөд үүнээс 35.3 хувь нь сул, 25.9
              хувь нь дунд, 6.7 хувь нь хүчтэй, 9.9 хувь нь нэн хүчтэй зэрэглэлд
              хамрагдаж байна. Эдгээрээс нэн хүчтэй цөлжилтийн зэрэглэлд багтах
              газарт Ховд аймгийн Мянгад, Дөргөн, Увс аймгийн Өмнөговь, Завхан
              аймгийн Сантмаргац, Говь-Алтай аймгийн Халиун, Баянхонгор аймгийн
              Галуут, Эрдэнэцогт, Төв аймгийн Баяндэлгэр, Хэнтий аймгийн Дархан,
              Баянхутаг, Дорнод аймгийн Матад, Чулуунхороот, Гурванзагал,
              Халхгол, Сүхбаатар аймгийн Эрдэнэцагаан, Сүхбаатар, Түвшинширээ,
              Дорноговь аймгийн Хатанбулаг, Замын Үүд, Өмнөговь аймгийн Ханбогд,
              Цогтцэций, Манлай, Дундговь аймгийн Говь-Угтаал, Баянжаргалан,
              Гурвансайхан, Өндөршил, Говь-Сүмбэр аймгийн Сүмбэр сумдын ихэнх
              нутаг хамрагдаж байна. <br />
              <br />
              Цөлжилтийн нэн хүчтэй зэрэглэл бүхий газруудын ойр орчим нутгууд
              болон Өмнөговь аймгийн Номгон, Мандал- Овоо, Цогт-Овоо, Өвөрхангай
              аймгийн Баруун-Баян-Улаан, Бүрд, Баянхонгор аймгийн Баян-Овоо,
              Бөмбөгөр, Богд, Говь- Алтай аймгийн Төгрөг сумдын нутаг цөлжилтийн
              хүчтэй зэрэглэлд багтана. Харин цөлжилтийн сул, дунд зэрэглэлтэй
              нутгуудад цөлжилтийн нэн хүчтэй, хүчтэй зэрэглэл бүхий газруудын
              ойр орчим нутгууд багтаж байна. <br />
              <br />
              2010 оны цөлжилтийн нэгдсэн зургийг өмнөх 2006 оны зурагтай
              харьцуулж үзвэл цөлжилтийн нэн хүчтэй, хүчтэй зэрэглэл бүхий
              газруудын тархац нутаг нэлээд өөрчлөгдсөн буюу ялангуяа нэн хүчтэй
              зэрэглэл бүхий газрууд шинээр голомтлон үүссэн нь элбэг байна.
              Тухайлбал, Баянхонгор аймгийн хойд хэсэг, Орхон голын сав дагуу
              болон Дорнодын тал нутагт энэ байдал тод ажиглагдана. Харин Их
              Нууруудын хотгорын төв хэсэг, Өвөрхангай, Дундговь аймгийн хил
              залгаа нутагт өмнөх цөлжилтийн нэн хүчтэй зэрэглэл буурч тархац
              нутаг нь багассан байна. <br />
              <br />
              <strong className="font-bold">
                Цөлжилт, газрын доройтолд нөлөөлөх хүчин зүйл.
              </strong>{" "}
              Цөлжилтийн үйл явц нь орон зай, цаг хугацааны туршид хувьсан
              өөрчлөгдөх янз бүрийн хүчин зүйлээр тодорхойлогддог. Энд хүн амын
              өсөлт, нийгэм-эдийн засгийн, улс төрийн, олон улсын худалдааны
              зэрэг дам хүчин зүйлс болон газар ашиглалтын хэлбэр, уур амьсгалын
              өөрчлөлт зэрэг шууд хүчин зүйлс багтана. Орчин үед цөлжилтийн
              асуудал нь байгалийн хязгаарлагдмал нөөцийг зохисгүй ашиглахаас
              үүдэлтэй гэж хэлж болно. Харин үүссэн нөхцөл байдал уур амьсгалын
              өөрчлөлтийн нөлөөгөөр улам даамжирах хандлагатай болдог. <br />
              <br />
              Цөлжилтийн нэгдсэн зурагт тооцсон үзүүлэлтүүдээс уг үйл явцад
              давамгайлан нөлөөлөх хүчин зүйлийн зургийг зохиож үнэлэхэд, газар
              нутгийн хэмжээнд цөлжилт илрээгүй буюу хүчин зүйлийн нөлөөгүй 10.4
              %, хүний хүчин зүйл давамгайлсан 1.9 %, байгалийн бүлэг хүчин зүйл
              нөлөөлсөн 16.0 % уур амьсгалын нөлөө 13.8 %, салхины элэгдэл
              давамгайлсан 20.8 %, усны элэгдэл эвдрэл давамгайлсан 0.1 %, хүний
              нөлөө ба уур амьсгал хавсарсан 13.1 %, салхи ба хүний нөлөө
              хавсарсан 23.9 хувийг эзэлж байна. Үүнийг нэгтгэж харвал цөлжилт
              илрээгүй буюу хүчин зүйлийн нөлөөгүй 10.4 %, хүний хүчин зүйл
              давамгайлсан буюу хавсарсан 39 %, байгалийн хүчин зүйл
              давамгайлсан буюу хавсарсан 50.6 % болж байна. Энэ нь цөлжилт
              хүчтэй, нэн хүчтэй илэрсэн тухайн газар нутагт байгалийн хүчин
              зүйл 56 %, хүний үйл ажиллагааны нөлөө 44 хувийг эзэлж байна гэсэн
              үг юм. <br /> <br />
              Нутаг дэвсгэрийн хувьд говийн бүс нутагт байгалийн хүчин зүйлс,
              зүүн бүсэд хүний нөлөө болон байгалийн хүчин зүйлс хавсарсан,
              хангайн бүсэд хүний нөлөө давамгайлсан, Монгол Алтай, Их нууруудын
              хотгорт уур амьсгалын өөрчлөлтийн нөлөө илүү нөлөөтэй байна.
            </p>
            <h3 className="font-bold mb-5">
              Аймгуудын цөлжилтийн төлөв байдал, хувиар
            </h3>
            <table width="100%" border="0" cellpadding="2" cellspacing="2">
              <thead>
                <tr className="even:bg-gray-100">
                  <th className="border">
                    <div align="center">
                      <em>№</em>
                    </div>
                  </th>
                  <th className="border">
                    <div align="center">
                      <em>Аймгийн нэр</em>
                    </div>
                  </th>
                  <th className="border">
                    <div align="center">
                      <em>Ой, нуур, өндөр уул&nbsp;</em>
                    </div>
                  </th>
                  <th className="border">
                    <div align="center">
                      <em>Илрээгүй</em>
                    </div>
                  </th>
                  <th className="border">
                    <div align="center">
                      <em>Сул</em>
                    </div>
                  </th>
                  <th className="border">
                    <div align="center">
                      <em>Дунд</em>
                    </div>
                  </th>
                  <th className="border">
                    <div align="center">
                      <em>Хүчтэй&nbsp;</em>
                    </div>
                  </th>
                  <th className="border">
                    <div align="center">
                      <em>Нэн Хүчтэй</em>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-gray-100">
                  <td className="border">
                    <div align="center">1</div>
                  </td>
                  <td className="border">Архангай</td>
                  <td className="border">
                    <div align="right">19.1</div>
                  </td>
                  <td className="border">
                    <div align="right">19.2</div>
                  </td>
                  <td className="border">
                    <div align="right">38.6</div>
                  </td>
                  <td className="border">
                    <div align="right">13</div>
                  </td>
                  <td className="border">
                    <div align="right">3.5</div>
                  </td>
                  <td className="border">
                    <div align="right">3.7</div>
                  </td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border">
                    <div align="center">2</div>
                  </td>
                  <td className="border">Баян-Өлгий</td>
                  <td className="border">
                    <div align="right">10.1</div>
                  </td>
                  <td className="border">
                    <div align="right">23.2</div>
                  </td>
                  <td className="border">
                    <div align="right">33.5</div>
                  </td>
                  <td className="border">
                    <div align="right">26.2</div>
                  </td>
                  <td className="border">
                    <div align="right">2.2</div>
                  </td>
                  <td className="border">
                    <div align="right">4.8</div>
                  </td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border">
                    <div align="center">3</div>
                  </td>
                  <td className="border">Баянхонгор</td>
                  <td className="border">
                    <div align="right">0.6</div>
                  </td>
                  <td className="border">
                    <div align="right">16.6</div>
                  </td>
                  <td className="border">
                    <div align="right">41.1</div>
                  </td>
                  <td className="border">
                    <div align="right">30.8</div>
                  </td>
                  <td className="border">
                    <div align="right">4.8</div>
                  </td>
                  <td className="border">
                    <div align="right">6.2</div>
                  </td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border">
                    <div align="center">4</div>
                  </td>
                  <td className="border">Булган</td>
                  <td className="border">
                    <div align="right">21.6</div>
                  </td>
                  <td className="border">
                    <div align="right">59.2</div>
                  </td>
                  <td className="border">
                    <div align="right">11.9</div>
                  </td>
                  <td className="border">
                    <div align="right">2.3</div>
                  </td>
                  <td className="border">
                    <div align="right">2.2</div>
                  </td>
                  <td className="border">
                    <div align="right">2.8</div>
                  </td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border">
                    <div align="center">5</div>
                  </td>
                  <td className="border">Говь-Алтай</td>
                  <td className="border">
                    <div align="right">0.6</div>
                  </td>
                  <td className="border">
                    <div align="right">11.6</div>
                  </td>
                  <td className="border">
                    <div align="right">40.3</div>
                  </td>
                  <td className="border">
                    <div align="right">38.7</div>
                  </td>
                  <td className="border">
                    <div align="right">5.4</div>
                  </td>
                  <td className="border">
                    <div align="right">3.4</div>
                  </td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border">
                    <div align="center">6</div>
                  </td>
                  <td className="border">Говь-Сүмбэр</td>
                  <td className="border">
                    <div align="right">0.8</div>
                  </td>
                  <td className="border">
                    <div align="right">0</div>
                  </td>
                  <td className="border">
                    <div align="right">11.4</div>
                  </td>
                  <td className="border">
                    <div align="right">25</div>
                  </td>
                  <td className="border">
                    <div align="right">18.7</div>
                  </td>
                  <td className="border">
                    <div align="right">44.1</div>
                  </td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border">
                    <div align="center">7</div>
                  </td>
                  <td className="border">Дархан-Уул</td>
                  <td className="border">
                    <div align="right">43.5</div>
                  </td>
                  <td className="border">
                    <div align="right">4.1</div>
                  </td>
                  <td className="border">
                    <div align="right">17.1</div>
                  </td>
                  <td className="border">
                    <div align="right">3.6</div>
                  </td>
                  <td className="border">
                    <div align="right">14.3</div>
                  </td>
                  <td className="border">
                    <div align="right">17.4</div>
                  </td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border">
                    <div align="center">8</div>
                  </td>
                  <td className="border">Дорнод</td>
                  <td className="border">
                    <div align="right">8</div>
                  </td>
                  <td className="border">
                    <div align="right">3.3</div>
                  </td>
                  <td className="border">
                    <div align="right">22.4</div>
                  </td>
                  <td className="border">
                    <div align="right">22.9</div>
                  </td>
                  <td className="border">
                    <div align="right">17.5</div>
                  </td>
                  <td className="border">
                    <div align="right">26</div>
                  </td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border">
                    <div align="center">9</div>
                  </td>
                  <td className="border">Дорноговь</td>
                  <td className="border">
                    <div align="right">0.1</div>
                  </td>
                  <td className="border">
                    <div align="right">2.5</div>
                  </td>
                  <td className="border">
                    <div align="right">43.2</div>
                  </td>
                  <td className="border">
                    <div align="right">32.4</div>
                  </td>
                  <td className="border">
                    <div align="right">7.2</div>
                  </td>
                  <td className="border">
                    <div align="right">14.7</div>
                  </td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border">
                    <div align="center">10</div>
                  </td>
                  <td className="border">Дундговь</td>
                  <td className="border">
                    <div align="right">0</div>
                  </td>
                  <td className="border">
                    <div align="right">0.9</div>
                  </td>
                  <td className="border">
                    <div align="right">25.5</div>
                  </td>
                  <td className="border">
                    <div align="right">45.6</div>
                  </td>
                  <td className="border">
                    <div align="right">13.7</div>
                  </td>
                  <td className="border">
                    <div align="right">14.2</div>
                  </td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border">
                    <div align="center">11</div>
                  </td>
                  <td className="border">Орхон</td>
                  <td className="border">
                    <div align="right">38.9</div>
                  </td>
                  <td className="border">
                    <div align="right">43.4</div>
                  </td>
                  <td className="border">
                    <div align="right">7.2</div>
                  </td>
                  <td className="border">
                    <div align="right">6.3</div>
                  </td>
                  <td className="border">
                    <div align="right">2.6</div>
                  </td>
                  <td className="border">
                    <div align="right">1.7</div>
                  </td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border">
                    <div align="center">12</div>
                  </td>
                  <td className="border">Өвөрхангай</td>
                  <td className="border">
                    <div align="right">2.7</div>
                  </td>
                  <td className="border">
                    <div align="right">16</div>
                  </td>
                  <td className="border">
                    <div align="right">43.8</div>
                  </td>
                  <td className="border">
                    <div align="right">24.4</div>
                  </td>
                  <td className="border">
                    <div align="right">7</div>
                  </td>
                  <td className="border">
                    <div align="right">6.1</div>
                  </td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border">
                    <div align="center">13</div>
                  </td>
                  <td className="border">Өмнөговь</td>
                  <td className="border">
                    <div align="right">0.1</div>
                  </td>
                  <td className="border">
                    <div align="right">2.3</div>
                  </td>
                  <td className="border">
                    <div align="right">48.1</div>
                  </td>
                  <td className="border">
                    <div align="right">32</div>
                  </td>
                  <td className="border">
                    <div align="right">5.3</div>
                  </td>
                  <td className="border">
                    <div align="right">12.2</div>
                  </td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border">
                    <div align="center">14</div>
                  </td>
                  <td className="border">Сүхбаатар</td>
                  <td className="border">
                    <div align="right">0.6</div>
                  </td>
                  <td className="border">
                    <div align="right">1.1</div>
                  </td>
                  <td className="border">
                    <div align="right">33</div>
                  </td>
                  <td className="border">
                    <div align="right">34.1</div>
                  </td>
                  <td className="border">
                    <div align="right">9.7</div>
                  </td>
                  <td className="border">
                    <div align="right">21.4</div>
                  </td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border">
                    <div align="center">15</div>
                  </td>
                  <td className="border">Сэлэнгэ</td>
                  <td className="border">
                    <div align="right">63.5</div>
                  </td>
                  <td className="border">
                    <div align="right">2.7</div>
                  </td>
                  <td className="border">
                    <div align="right">12</div>
                  </td>
                  <td className="border">
                    <div align="right">10</div>
                  </td>
                  <td className="border">
                    <div align="right">6.1</div>
                  </td>
                  <td className="border">
                    <div align="right">5.7</div>
                  </td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border">
                    <div align="center">16</div>
                  </td>
                  <td className="border">Төв</td>
                  <td className="border">
                    <div align="right">22</div>
                  </td>
                  <td className="border">
                    <div align="right">13.1</div>
                  </td>
                  <td className="border">
                    <div align="right">37.1</div>
                  </td>
                  <td className="border">
                    <div align="right">18.9</div>
                  </td>
                  <td className="border">
                    <div align="right">4.6</div>
                  </td>
                  <td className="border">
                    <div align="right">4.2</div>
                  </td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border">
                    <div align="center">17</div>
                  </td>
                  <td className="border">Увс</td>
                  <td className="border">
                    <div align="right">11.2</div>
                  </td>
                  <td className="border">
                    <div align="right">22.2</div>
                  </td>
                  <td className="border">
                    <div align="right">28.6</div>
                  </td>
                  <td className="border">
                    <div align="right">27.5</div>
                  </td>
                  <td className="border">
                    <div align="right">5.1</div>
                  </td>
                  <td className="border">
                    <div align="right">5.4</div>
                  </td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border">
                    <div align="center">18</div>
                  </td>
                  <td className="border">Ховд</td>
                  <td className="border">
                    <div align="right">4.2</div>
                  </td>
                  <td className="border">
                    <div align="right">32.2</div>
                  </td>
                  <td className="border">
                    <div align="right">36.4</div>
                  </td>
                  <td className="border">
                    <div align="right">19.3</div>
                  </td>
                  <td className="border">
                    <div align="right">2.7</div>
                  </td>
                  <td className="border">
                    <div align="right">5.3</div>
                  </td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border">
                    <div align="center">19</div>
                  </td>
                  <td className="border">Хөвсгөл</td>
                  <td className="border">
                    <div align="right">30.9</div>
                  </td>
                  <td className="border">
                    <div align="right">16.2</div>
                  </td>
                  <td className="border">
                    <div align="right">26.1</div>
                  </td>
                  <td className="border">
                    <div align="right">12.9</div>
                  </td>
                  <td className="border">
                    <div align="right">5.8</div>
                  </td>
                  <td className="border">
                    <div align="right">8.1</div>
                  </td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border">
                    <div align="center">20</div>
                  </td>
                  <td className="border">Хэнтий</td>
                  <td className="border">
                    <div align="right">21.6</div>
                  </td>
                  <td className="border">
                    <div align="right">15.2</div>
                  </td>
                  <td className="border">
                    <div align="right">36.6</div>
                  </td>
                  <td className="border">
                    <div align="right">16.5</div>
                  </td>
                  <td className="border">
                    <div align="right">3.3</div>
                  </td>
                  <td className="border">
                    <div align="right">6.8</div>
                  </td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border">
                    <div align="center">21</div>
                  </td>
                  <td className="border">Завхан</td>
                  <td className="border">
                    <div align="right">3.4</div>
                  </td>
                  <td className="border">
                    <div align="right">27.8</div>
                  </td>
                  <td className="border">
                    <div align="right">38.9</div>
                  </td>
                  <td className="border">
                    <div align="right">21.7</div>
                  </td>
                  <td className="border">
                    <div align="right">3.8</div>
                  </td>
                  <td className="border">
                    <div align="right">4.6</div>
                  </td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border">
                    <div align="center">22</div>
                  </td>
                  <td className="border">Улаанбаатар</td>
                  <td className="border">
                    <div align="right">21.5</div>
                  </td>
                  <td className="border">
                    <div align="right">5.8</div>
                  </td>
                  <td className="border">
                    <div align="right">27.7</div>
                  </td>
                  <td className="border">
                    <div align="right">21.1</div>
                  </td>
                  <td className="border">
                    <div align="right">8.1</div>
                  </td>
                  <td className="border">
                    <div align="right">15.8</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default IndexPage;
