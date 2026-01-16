import { Button, Col, Flex, Input, Progress, Rate, Row, Select } from "antd"
import "./ReviewView.css"
import { IoFlagOutline } from "react-icons/io5"
import avatar from "../../../assets/user-avatar.jpg"
import Dragger from "antd/es/upload/Dragger"
import { InboxOutlined } from "@ant-design/icons"
import { FaRegThumbsUp } from "react-icons/fa"
import dayjs from "dayjs"

const ReviewView = ({ product }) => {

    const { TextArea } = Input;

    const items = [
        {
            label: "Top Reviews",
            value: "top",
        },
        {
            label: "Most Recent",
            value: "recent",
        },
    ];

    dayjs('2025-04-30T09:41:02.053Z').format("DD MM YY");

    return (
        <div className="review-main">
            <Row gutter={[32]}>
                <Col md={7} xs={12}>
                    <div className="create-review-header">
                        <h4 className="create-review-title">Customer Review</h4>
                        <Rate>{product?.rating}</Rate>
                    </div>

                    <div className="progress-main">
                        <Flex gap="small" vertical>
                            <Progress percent={30} />
                            <Progress percent={50} status="active" />
                            <Progress percent={70} status="exception" />
                            <Progress percent={100} />
                            <Progress percent={50} showInfo={false} />
                        </Flex>
                    </div>

                    <h3>Review this Product</h3>
                    <p>Share your thoughts with other customers.</p>
                    <Button className="review-btn">Write the Review</Button>

                </Col>

                <Col md={14} xs={24}>
                    <div>
                        <div className="reviews-header-main">
                            <h4 className="review-view-title">Reviews</h4>
                            <Select defaultValue="top"
                                className="review-select" options={items}></Select>
                        </div>
                        {product?.reviews.map((review, index) => {
                            return (
                                <div className="comments-section">
                                    <img className="user-avatar" src={avatar} />
                                    <div className="comments-section-header">
                                        <h4 className="comments-title">{review.reviewerName}</h4>

                                        <div className="date-section">
                                            {dayjs(review.date).format("DD MMMM YYYY")}
                                            <span className="date"> Unverified Purchase</span>
                                        </div>

                                        <div className="rating-section-main">
                                            <Rate
                                                allowHalf
                                                className="product-deals-rating" defaultValue={5} allowClear={false} />

                                            <span>Need to recheck the weight at delivery point</span>
                                        </div>

                                        <p className="review-comment">{review.comment}</p>


                                        <div className="action-links-main">
                                            <a
                                                className="action-link"
                                                href="#">
                                                <FaRegThumbsUp />
                                                <span>Helpful</span>
                                            </a>

                                            <a
                                                className="action-link"
                                                href="#">
                                                <IoFlagOutline />
                                                <span>Report Abuse</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <Button className="read-more-reviews-btn">Read More Reviews</Button>

                    <div className="create-review-content">
                        <h3 className="create-review-title">Add a headline</h3>
                        <Input className="add-headline-input" placeholder="What,s most important to Know"></Input>
                    </div>

                    <div className="create-review-content">
                        <h3 className="create-review-title">Add a photo or video.</h3>
                        <p className="create-review-description">Shoppers find images and videos more helpful than text alone</p>

                        <Dragger
                            name="file"
                            multiple="true"
                            action='https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload'
                        >
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>

                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">
                                Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                                banned files.
                            </p>
                        </Dragger>
                    </div>

                    <div className="textarea-main">
                        <h3 className="create-review-title">Add  a Written Review</h3>
                        <TextArea
                            className="add-written-review-input"
                            rows={3}
                            placeholder="What did you like or dislike? What did you use this product for?" maxLength={6} />
                    </div>

                    <div className="submit-form">
                        <Button className="submit-review-btn">Submit Review</Button>
                    </div>
                </Col>
            </Row>

        </div >
    )
}

export default ReviewView