const About: React.FC = () => {
  return (
    <section className="bg-gray-200 shadow-custom text-black  py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-8">WHAT WE'RE ABOUT</h2>
            <p>
              Mexadu Concepts Nig. Ltd is a dynamic and result oriented company
              that has proffred solutions to many companies, Industries,
              Governmental organizations and Parastatal needs. The company was
              incorporated in 2010 with the name Mexadu Concepts Nig. Ltd. With
              (RC: 922342) We also ensure that we achieve your desired goals.
            </p>
          </div>
          <div className="md:w-1/2 md:pr-8">
            <h3 className="text-2xl font-bold mb-4">MEXADU CONECPT LTD</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
