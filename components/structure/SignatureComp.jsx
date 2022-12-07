import { SignatureComponent } from '@syncfusion/ej2-react-inputs';
import { useContext } from 'react';
import { ModalContext } from './ModalContainer';

const SignatureComp = ({ setSignatureUrl, children }) => {
  const { onClose } = useContext(ModalContext);

  let signObj;
  const OnSave = () => {
    setSignatureUrl(signObj?.getSignature());
    // signObj?.save();
    onClose && onClose();
  };
  const OnClear = () => {
    signObj?.clear();
  };
  return (
    <div>
      <SignatureComponent
        ref={(sign) => (signObj = sign)}
        backgroundColor="white"
        strokeColor="black"
        className="w-signature"
        // velocity={1}
        // disabled={true}
        // minStrokeWidth={2}
        // maxStrokeWidth={5}
      >
        {/* backgroundImage="https://www.syncfusion.com/blogs/wp-content/uploads/2019/11/blog_1x.jpg" */}
      </SignatureComponent>
      {children}
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="btn-primary" onClick={OnSave}>
            Accept
          </button>
          <button className="btn-primary" onClick={OnClear}>
            Clear
          </button>
          <button
            className="btn-cancel"
            onClick={() => {
              OnClear();
              onClose && onClose();
            }}
          >
            Cancel
          </button>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="savesign" className="input-primary" />
          <label htmlFor="savesign">Save my signature for future use.</label>
        </div>
      </div>
    </div>
  );
};

export default SignatureComp;
