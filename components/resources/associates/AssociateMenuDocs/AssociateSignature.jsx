import Image from 'next/image';
import ModalContainer from '../../../structure/ModalContainer';
import SignatureComp from '../../../structure/SignatureComp';

const AssociateSignature = ({ setAssociateSignUrl, associateSignUrl }) => {
  return (
    <div className="flex items-center gap-4">
      <ModalContainer
        size="lg"
        openButton={
          <p className="verdana11 cursor-pointer text-primary-orange underline">
            Associate Signature
          </p>
        }
      >
        <SignatureComp setSignatureUrl={setAssociateSignUrl} />
      </ModalContainer>
      {associateSignUrl && (
        <Image
          src={associateSignUrl}
          alt="signature"
          width="200"
          height="50"
          className="object-contain"
        />
      )}
    </div>
  );
};

export default AssociateSignature;
