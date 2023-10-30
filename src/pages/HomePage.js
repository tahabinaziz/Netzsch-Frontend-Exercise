

import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/news/thumbnail_laborfilm-1894x1065-480x270.webp";
import image5 from "../assets/images/news/NetzschTechTalk.webp";
import image6 from "../assets/images/news/20230920_EcoVadis_1920x1080-1920x1079-480x270.webp";
import image7 from "../assets/images/news/Netzschpumpen.webp";
import image8 from "../assets/images/news/jobs-karriere-forschung-entwicklung 3-750x500-750x500.webp";
import image9 from "../assets/images/news/Footage_NETZSCH_49-2449x1632-1140x760.webp";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import Button from "../components/Button";
import Footer from "../components/Footer";
import News from "../components/News";
import TwoColumn from "../components/TwoColumn"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

const HomePage = () => {
  const graphColor='#017167'
  const drilldowns = 'Nation'
  const measures = 'Population'
  const [apiData, setApiData] = useState([]);
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  /*Data For Graph */
  useEffect(() => {
    const data = [
      {
        id: 1,
        month: "January",
        result: 25
      },
      {
        id: 1,
        month: "Februray",
        result: 37
      },
      {
        id: 1,
        month: "March",
        result: 48
      },
      {
        id: 1,
        month: "April",
        result: 20
      },

      {
        id: 1,
        month: "May",
        result: 60
      },

      {
        id: 1,
        month: "June",
        result: 75
      },
      {
        id: 1,
        month: "July",
        result: 60
      },
      {
        id: 1,
        month: "August",
        result: 90
      },
      {
        id: 1,
        month: "September",
        result: 98
      },
      {
        id: 1,
        month: "October",
        result: 48
      },
      {
        id: 1,
        month: "November",
        result: 55
      },
      {
        id: 1,
        month: "December",
        result: 70
      },
    ]

    setChartData({
      labels: data.map(month => month.month),
      datasets: [
        {
          label: "Bar Chart",
          data: data.map(marks => marks.result),
          borderColor: graphColor,
          backgroundColor: graphColor,
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Monthly Reportly 2023",
        },
      },
    });
  }, []);

/*Data For Table */
  useEffect(() => {
    setIsLoading(true);
    const loadTextBook = async () => {
      return await axios.get(`https://datausa.io/api/data?drilldowns=${drilldowns}&measures=${measures}`,
        { headers: { "Content-Type": `application/json` } }
      ).then(res => {
        setApiData(res.data.data);
        setIsLoading(false);
      }).catch(err => {
        console.log(err)
      })
    }
    loadTextBook()
  }, [])

  return (
    <>
      <div className="container mx-auto md:p-8 lg:-mt-8">
        <div className="grid grid-cols-1 container md:grid-cols-2 gap-4 p-6">
          <div className="bg-gray-200  flex flex-col justify-center items-center p-4 gap-8">
            <p className="font-sans text-xl ">
              Was vor 150 Jahren in einer kleinen Werkstatt begann, hat sich zu einer <b>international tätigen Unternehmensgruppe</b> entwickelt. Viele Meilensteine haben unsere <b>Firmengeschichte</b> ganz besonders geprägt und dafür gesorgt, dass wir im Jahr 2023 ein großartiges  Firmenjubiläum feiern können.
            </p>
            <Button
              url={"/"}
              text={"Mehr erfahren"}
              className={"hover:bg-hoverColor"}
            />
          </div>
          <div className="bg-gray-300 p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="h-6 md:h-20 spacing-y-2 bg-primary rounded"></div>
                <img src={image1} alt="image1.png" />
                <img src={image2} alt="image2.png" />
              </div>
              <div className="space-y-3">
                <img src={image3} alt="image3.png" />
                <div className="h-8 md:h-20 spacing-y-2 bg-primary rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <section className="container mx-auto md:p-8 lg:-mt-8  ">
        <h3 className=" text-primary font-medium text-3xl  md:text-4xl p-4">
          Population
        </h3>
        {isLoading && <Loader />}
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg ">
          <div className="w-full overflow-x-auto">
            <table className="w-full border-spacing">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-white bg-primary uppercase border-b border-gray">
                  <th className="px-4 py-3">No.</th>
                  <th className="px-4 py-3">Nation</th>
                  <th className="px-4 py-3">Year</th>
                  <th className="px-4 py-3">Population</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {Array.isArray(apiData) ? apiData.map((item, index) => {
                  return (
                    <tr className="text-gray-700" key={index + 1}>
                      <td className="px-4 py-3 text-md  border">{index + 1}</td>
                      <td className="px-4 py-3 text-md  border">{item.Nation}</td>
                      <td className="px-4 py-3 text-md border">{item.Year}</td>
                      <td className="px-4 py-3 text-md border">{item.Population}</td>
                    </tr>
                  )
                }).reverse() : []}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Two Column Component */}
      <div className="container mx-auto md:p-8 lg:-mt-8">
        {/* Image on the left */}
        <TwoColumn
          image_link={image8}
          heading="Proven Excellence"
          paragraph="Nicht nur ein Claim, sondern Leistungsversprechen und Leistungsverpflichtung zugleich"
          buttonText="mehr"
          imageOnLeft={true}
          showButton={true}
        />
        {/* Image on the right */}
        <TwoColumn
          image_link={image9}
          heading="Unternehmenswerte"
          paragraph="Um gemeinsam viel erreichen zu können, braucht es starke Unternehmenswerte, die Basis des täglichen Denken und Handelns im Unternehmen sind."
          buttonText="mehr"
          imageOnLeft={false}
          showButton={true}
        />
      </div>
      <div className="container mx-auto py-4 md:p-4">
        <h3 className="text-3xl text-primary font-medium md:text-4xl p-4">Analysis Report</h3>
        <Bar options={chartOptions} data={chartData} />
      </div>

      {/* News */}
      <div className="container mx-auto py-4 md:p-4">
        <h3 className=" text-primary font-medium text-3xl  md:text-4xl p-4">
          News
        </h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 p-4">
          <div className="flex">
            <News
              link={'https://analyzing-testing.netzsch.com/de/blog/2023/die-netzsch-applikationslabore-wir-praesentieren-den-neuen-imagefilm'}
              height={250}
              width={250}
              image={image4}
              text1={"23/10/2023"}
              text2={"ANALYSIEREN & PRUFEN"}
              text3={
                "Die NETZSCH Applikationslabore: Wir präsentieren den neuen Imagefilm"
              }
            />
          </div>
          <div className="flex">
            <News
              link={'https://analyzing-testing.netzsch.com/de/blog/2023/netzsch-tech-talk-neueste-technologien-der-thermischen-analyse-in-nur-30-minuten'}
              height={250}
              width={280}
              image={image5}
              text1={"23/10/2023"}
              text2={"ANALYSIEREN & PRUFEN"}
              text3={
                "NETZSCH Tech Talk – Neueste Technologien der Thermischen Analyse in nur 30 Minuten "
              }
            />
          </div>
          <div className="flex mt-4">
            <News
              height={250}
              width={270}
              link={'https://pumps-systems.netzsch.com/de/news/2023/netzsch-mit-ecovadis-silbermedaille-ausgezeichnet'}
              image={image6}
              text1={"23/10/2023"}
              text2={"PUMPEN & SYSTEME"}
              text3={
                "Zum dritten Mal in Folge: NETZSCH mit EcoVadis Silbermedaille ausgezeichnet "
              }
            />
          </div>
          <div className="flex mt-4">
            <News
              link={'https://pumps-systems.netzsch.com/de/news/2023/netzsch-pumpen-so-profitieren-sie-nachhaltig'}
              image={image7}
              height={250}
              width={200}
              text1={"18/10/2023"}
              text2={"PUMPEN & SYSTEME"}
              text3={"NETZSCH Pumpen: So profitieren Sie nachhaltig"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default HomePage;
