'use client';

import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import {
    SafetyCertificateOutlined,
    FileProtectOutlined,
    HistoryOutlined,
    BulbOutlined,
    GiftOutlined,
    CoffeeOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

export default function CalculatorInfo() {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-5xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Understanding 2026 Payroll Rules</h2>
                    <p className="text-gray-500 text-lg max-w-3xl leading-relaxed">
                        The Philippine tax landscape continues to evolve. Our calculator is built to incorporate the latest
                        scheduled adjustments for 2026, helping you plan your finances with precision.
                    </p>
                </div>

                <Row gutter={[32, 32]}>
                    <Col xs={24} md={12} lg={8}>
                        <Card className="!rounded-lg border-gray-50 bg-gray-50/50 h-full hover:shadow-lg transition-shadow">
                            <SafetyCertificateOutlined className="text-4xl text-accent mb-6" />
                            <Title level={4} className="!text-primary mb-4">Withholding Tax (BIR)</Title>
                            <Paragraph className="text-gray-600 leading-relaxed text-sm">
                                Computed based on the Revised Withholding Tax Table under the TRAIN Law. This is the amount deducted from your salary by your employer to be remitted to the BIR as your income tax.
                            </Paragraph>
                        </Card>
                    </Col>
                    <Col xs={24} md={12} lg={8}>
                        <Card className="!rounded-lg border-gray-50 bg-gray-50/50 h-full hover:shadow-lg transition-shadow">
                            <HistoryOutlined className="text-4xl text-accent mb-6" />
                            <Title level={4} className="!text-primary mb-4">SSS Contributions</Title>
                            <Paragraph className="text-gray-600 leading-relaxed text-sm">
                                Updated based on the latest SSS Contribution Schedule. Includes both the Regular Social Security and the mandatory WISP/WISP+ savings for employees with higher salary brackets.
                            </Paragraph>
                        </Card>
                    </Col>
                    <Col xs={24} md={12} lg={8}>
                        <Card className="!rounded-lg border-gray-50 bg-gray-50/50 h-full hover:shadow-lg transition-shadow">
                            <FileProtectOutlined className="text-4xl text-accent mb-6" />
                            <Title level={4} className="!text-primary mb-4">PhilHealth Premiums</Title>
                            <Paragraph className="text-gray-600 leading-relaxed text-sm">
                                Calculated at the current prescribed rate (5% for 2026) of the basic monthly salary, shared equally between the employee and employer, with set income floors and ceilings.
                            </Paragraph>
                        </Card>
                    </Col>
                    <Col xs={24} md={12} lg={8}>
                        <Card className="!rounded-lg border-gray-50 bg-gray-50/50 h-full hover:shadow-lg transition-shadow">
                            <BulbOutlined className="text-4xl text-accent mb-6" />
                            <Title level={4} className="!text-primary mb-4">Pag-IBIG Fund</Title>
                            <Paragraph className="text-gray-600 leading-relaxed text-sm">
                                Standard contribution is 2% of the monthly compensation, capped at a maximum salary base. This fund provides housing loans and short-term loans for Filipino workers.
                            </Paragraph>
                        </Card>
                    </Col>
                    <Col xs={24} md={12} lg={8}>
                        <Card className="!rounded-lg border-gray-50 bg-gray-50/50 h-full hover:shadow-lg transition-shadow">
                            <GiftOutlined className="text-4xl text-accent mb-6" />
                            <Title level={4} className="!text-primary mb-4">13th Month Pay</Title>
                            <Paragraph className="text-gray-600 leading-relaxed text-sm">
                                A mandatory benefit for all rank-and-file employees, equivalent to 1/12 of the total basic salary earned within a calendar year, usually paid out no later than December 24.
                            </Paragraph>
                        </Card>
                    </Col>
                    <Col xs={24} md={12} lg={8}>
                        <Card className="!rounded-lg border-gray-50 bg-gray-50/50 h-full hover:shadow-lg transition-shadow">
                            <CoffeeOutlined className="text-4xl text-accent mb-6" />
                            <Title level={4} className="!text-primary mb-4">De Minimis Benefits</Title>
                            <Paragraph className="text-gray-600 leading-relaxed text-sm">
                                These are small-value facilities or privileges granted by employers that are exempt from withholding tax and FBT, such as rice subsidies, laundry allowance, and medical cash gifts.
                            </Paragraph>
                        </Card>
                    </Col>
                </Row>
            </div>
        </section>
    );
}
