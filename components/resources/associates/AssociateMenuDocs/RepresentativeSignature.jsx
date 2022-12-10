import { Input } from '@chakra-ui/react';
import Image from 'next/image';
import ModalContainer from '../../../structure/ModalContainer';
import SignatureComp from '../../../structure/SignatureComp';

const RepresentativeSignature = ({
  repSignUrl,
  setRepSignUrl,
  setRepImg,
  repImg,
}) => {
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setRepImg(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="flex items-center gap-4">
      <ModalContainer
        size="lg"
        openButton={
          <p className="verdana11 text-primary-orange underline">
            Representative Signature
          </p>
        }
      >
        <SignatureComp setSignatureUrl={setRepSignUrl}>
          <div className="">
            <p className="mt-2">Sign above</p>
            <div className="my-4 flex w-full items-center gap-4">
              <p className="whitespace-nowrap text-end">
                Full Name and Discipline:
              </p>
              <div className="flex w-full items-center gap-3">
                <input type="text" className="input-primary" />
                <button className="btn-primary">Use</button>
              </div>
            </div>
            <div className="my-4 flex w-full items-center gap-4">
              <p className="whitespace-nowrap text-end">
                or select file to upload:
              </p>
              <div className="flex w-full items-center">
                <input
                  onChange={onImageChange}
                  className="w-44 rounded border p-[1px]  shadow-sm shadow-secondary-blue"
                  type="file"
                />
              </div>
            </div>
            <p className="my-6">
              By clicking Accept, I hereby attest that the signature will be the
              electronic representation of my signature for all purposes when I
              use them on orders, notations and legally binding documents - just
              the same as a pen-and-paper signature.
            </p>
          </div>
        </SignatureComp>
      </ModalContainer>
      {repSignUrl && (
        <Image
          src={repSignUrl}
          alt="signature"
          width="200"
          height="50"
          className="object-contain"
        />
      )}
      {repImg && (
        <Image
          src={repImg}
          alt="signature"
          width="100"
          height="100"
          className="object-contain"
        />
      )}
    </div>
  );
};

export default RepresentativeSignature;
