import Image from 'next/image';
import image from '../public/image.png'

const Pourquoi = () => {
  const raisons = [
    {
      numero: 1,
      titre: "Très grande expertise",
      description: "lorem ipsum dolor sit alert lorem ipsum dolor sit alert"
    },
    {
      numero: 2,
      titre: "Lorem ipsum dolor sit",
      description: "lorem ipsum dolor sit alert lorem ipsum dolor sit alert"
    },
    {
      numero: 3,
      titre: "Lorem ipsum dolor sit amet",
      description: "lorem ipsum dolor sit alert lorem ipsum dolor sit alert"
    }
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <Image
          src={image}
          alt="Image de construction"
          width={500}
          height={300}
          objectFit="cover"
        />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Pourqoi travailler avec nous ?</h2>
        <p className="text-gray-600 mb-6">lorem ipsum dolor sit alert lorem ipsum dolor sit alert</p>
        
        {raisons.map((raison) => (
          <div key={raison.numero} className="flex items-start mb-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">
              {raison.numero}
            </div>
            <div>
              <h3 className="font-semibold text-lg text-blue-600">{raison.titre}</h3>
              <p className="text-gray-600">{raison.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pourquoi;

