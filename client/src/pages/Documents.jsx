import Button from 'react-bootstrap/Button';

function Documents() {


    return (
        <div className='document-parent'>
            <h2>Important Documents</h2>
            <div className='downloadElements'>
                <div className="downloadBtn mb-2">
                    <h4>Lead Based Paint Federal Pamphlet.pdf</h4>
                    <Button href="../../content/documents/Lead Based Paint Fed Pamphlet.pdf" download="Lead-Based-Paint-Fed-Pamphlet" variant="secondary" size="lg">
                        Download
                    </Button>{' '}
                </div>

                <div className="downloadBtn mb-2">
                    <h4>SLO Noise Guidelines.docx</h4>
                    <Button href="../../content/documents/SLO Noise Guidelines.docx" download="SLO Noise Guidelines" variant="secondary" size="lg">
                        Download
                    </Button>{' '}
                </div>
            </div>
        </div >
    )
};

export default Documents;