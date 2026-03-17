import { Button, Col, Form, Row } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import "./DeliveryInstructions.css"

const DeliveryInstructions = () => {
    return (
        <>
            <div className='delivery-instructions-main'>
                <Form layout='vertical'>
                    <Form.Item label={<span className='form-label'>Delivery instructions</span>}>
                        <TextArea
                            placeholder='Write delivery Instructions'
                            rows={3}
                            className='delivery-instructions-input'
                        ></TextArea>
                        <p className='instructions-description'>Add instructions for how you want your order shopped and/or delivered</p>
                    </Form.Item>
                </Form>
            </div>

            <div className='instructions-footer'>
                <Button className='prev-btn'>Prev</Button>
                <Button className='next-btn'>Next</Button>
            </div>
        </>

    )
}

export default DeliveryInstructions