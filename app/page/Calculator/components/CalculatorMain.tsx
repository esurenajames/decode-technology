'use client';

import React, { useState } from 'react';
import {
    Form,
    InputNumber,
    Select,
    Radio,
    Checkbox,
    Button,
    Card,
    Typography,
    Space,
    Divider,
    Row,
    Col
} from 'antd';
import {
    InfoCircleOutlined,
    AndroidOutlined,
    CalculatorOutlined,
    ClearOutlined,
    PlayCircleOutlined,
    HistoryOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;

export default function CalculatorMain() {
    const [form] = Form.useForm();
    const [period, setPeriod] = useState('monthly');
    const [results, setResults] = useState({
        basicPay: 0,
        taxableAllowance: 0,
        nonTaxableAllowance: 0,
        nightDiff: 0,
        overtime: 0,
        grossPay: 0,
        withholdingTax: 0,
        sss: 0,
        philhealth: 0,
        pagibig: 0,
        loans: 0,
        otherDeductions: 0,
        totalDeductions: 0,
        netPay: 0,
    });

    const onCompute = (values: any) => {
        // Simplified calculation logic for demonstration
        const basic = values.basicPay || 0;
        const taxable = values.taxableAllowance || 0;
        const nonTaxable = values.nonTaxableAllowance || 0;
        const nightDiff = values.addNightDiff ? (values.nightDiffValue || 0) : 0;
        const overtime = values.addOvertime ? (values.overtimeValue || 0) : 0;

        const grossPay = basic + taxable + nonTaxable + nightDiff + overtime;

        // Mock deductions (standard Phil govt rates approx)
        const sss = basic * 0.045;
        const philhealth = basic * 0.02;
        const pagibig = basic > 0 ? 100 : 0;
        const withholdingTax = grossPay > 20833 ? (grossPay - 20833) * 0.2 : 0;
        const loans = values.loans || 0;
        const otherDeductions = values.otherDeductions || 0;

        const totalDeductions = sss + philhealth + pagibig + withholdingTax + loans + otherDeductions;
        const netPay = grossPay - totalDeductions;

        setResults({
            basicPay: basic,
            taxableAllowance: taxable,
            nonTaxableAllowance: nonTaxable,
            nightDiff: nightDiff,
            overtime: overtime,
            grossPay,
            withholdingTax,
            sss,
            philhealth,
            pagibig,
            loans,
            otherDeductions,
            totalDeductions,
            netPay,
        });
    };

    const onClear = () => {
        form.resetFields();
        setResults({
            basicPay: 0,
            taxableAllowance: 0,
            nonTaxableAllowance: 0,
            nightDiff: 0,
            overtime: 0,
            grossPay: 0,
            withholdingTax: 0,
            sss: 0,
            philhealth: 0,
            pagibig: 0,
            loans: 0,
            otherDeductions: 0,
            totalDeductions: 0,
            netPay: 0,
        });
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <Card className="shadow-2xl shadow-gray-200/50 border-gray-100 !rounded-2xl overflow-hidden">
                <Row gutter={[0, 0]}>
                    {/* Input Side */}
                    <Col xs={24} lg={14} className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
                        <div className="flex items-center justify-between mb-10">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-primary text-xl">
                                    <CalculatorOutlined />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-primary mb-0">Step 1: Employment Details</h2>
                                    <p className="text-gray-400 text-sm">Enter your compensation details below</p>
                                </div>
                            </div>

                        </div>

                        <Form
                            form={form}
                            layout="vertical"
                            onValuesChange={(_, allValues) => onCompute(allValues)}
                            initialValues={{
                                employmentType: 'Minimum Wage Employee',
                                payrollPeriod: 'Monthly',
                                basicPay: 0,
                            }}
                            className="calculator-form"
                        >
                            <div className="space-y-6">
                                {/* Start Card */}
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden">
                                    <div className="mb-6">
                                        <h4 className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-1 flex items-center gap-2">Start Details</h4>
                                        <p className="text-xs text-gray-500">Provide your basic employment and salary information to establish the foundation of your calculation.</p>
                                    </div>
                                    <Row gutter={24}>
                                        <Col xs={24} md={12}>
                                            <Form.Item name="employmentType" label={<span className="text-gray-500 font-bold uppercase tracking-wider text-[10px]">Employment Type</span>}>
                                                <Select size="large" className="w-full">
                                                    <Option value="Minimum Wage Employee">Minimum Wage Employee</Option>
                                                    <Option value="Private Employee">Private Employee</Option>
                                                    <Option value="Government Employee">Government Employee</Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} md={12}>
                                            <Form.Item
                                                name="basicPay"
                                                label={<span className="text-gray-500 font-bold uppercase tracking-wider text-[10px]">Basic Monthly Pay</span>}
                                                rules={[{ required: true, message: 'Please enter basic pay' }]}
                                                className="mb-0"
                                            >
                                                <InputNumber
                                                    className="!w-full"
                                                    size="large"
                                                    min={0}
                                                    precision={2}
                                                    placeholder="0.00"
                                                    prefix={<span className="text-gray-400">₱</span>}
                                                    formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                    parser={(value) => value?.replace(/\$\s?|(,*)/g, '') as unknown as number}
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                </div>

                                {/* Allowance & Additionals Card */}
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden">
                                    <div className="mb-6">
                                        <h4 className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-1 flex items-center gap-2">Allowances & Additional Pay</h4>
                                        <p className="text-xs text-gray-500">Add extra compensation elements like variable allowances, overtime, and night differentials.</p>
                                    </div>
                                    <div className="bg-gray-50/50 p-6 rounded-xl border border-gray-100">
                                        <div className="flex flex-col md:flex-row gap-6">
                                            <Form.Item name="taxableAllowance" label={<span className="text-gray-500 font-bold uppercase tracking-wider text-[10px]">Taxable Allowance</span>} className="mb-0 flex-1">
                                                <InputNumber className="!w-full border-gray-200 hover:border-blue-400 focus:border-blue-500" size="large" placeholder="0.00" precision={2} formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} parser={(value) => value?.replace(/\$\s?|(,*)/g, '') as unknown as number} />
                                            </Form.Item>

                                            <Form.Item name="nonTaxableAllowance" label={<span className="text-gray-500 font-bold uppercase tracking-wider text-[10px]">Non-Taxable Allowance</span>} className="mb-0 flex-1">
                                                <InputNumber className="!w-full border-gray-200 hover:border-blue-400 focus:border-blue-500" size="large" placeholder="0.00" precision={2} formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} parser={(value) => value?.replace(/\$\s?|(,*)/g, '') as unknown as number} />
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>

                                {/* Deductions Card */}
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden">
                                    <div className="mb-6">
                                        <h4 className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-1 flex items-center gap-2">Deductions</h4>
                                        <p className="text-xs text-gray-500">Include personal loans, company charges, or any other manual salary deductions.</p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                        <Form.Item name="loans" label={<span className="text-gray-500 font-bold uppercase tracking-wider text-[10px]">Loans</span>} className="mb-0">
                                            <InputNumber className="!w-full" size="large" placeholder="0.00" precision={2} formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} parser={(value) => value?.replace(/\$\s?|(,*)/g, '') as unknown as number} />
                                        </Form.Item>
                                        <Form.Item name="otherDeductions" label={<span className="text-gray-500 font-bold uppercase tracking-wider text-[10px]">Other Deductions</span>} className="mb-0">
                                            <InputNumber className="!w-full" size="large" placeholder="0.00" precision={2} formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} parser={(value) => value?.replace(/\$\s?|(,*)/g, '') as unknown as number} />
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </Col>

                    {/* Results Side */}
                    <Col xs={24} lg={10} className="bg-gray-50/30 p-8 md:p-12">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xl">
                                <HistoryOutlined />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-primary mb-0">Step 2: Analysis</h2>
                                <p className="text-gray-400 text-sm">Your salary breakdown results</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-accent/10 transition-colors" />
                                <div className="relative z-10 flex flex-col items-center">
                                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Estimated Take-Home Pay</p>
                                    <h3 className="text-3xl font-extrabold text-primary mb-3">
                                        ₱ {results.netPay.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </h3>
                                    <p className="text-gray-400 text-[10px] font-medium italic opacity-70">Calculated based on 2026 Philippine Tax Schedule</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <h4 className="text-[10px] font-bold text-green-400 uppercase tracking-[0.2em] mb-4">Earnings</h4>
                                <div className="space-y-3">
                                    <ResultRow label="Basic Salary" value={results.basicPay} />
                                    <ResultRow label="Taxable Allowances" value={results.taxableAllowance} />
                                    <ResultRow label="Non-taxable Allowances" value={results.nonTaxableAllowance} />
                                    <ResultRow label="Night diff / Overtime" value={results.nightDiff + results.overtime} />
                                    <Divider className="!my-2 border-gray-50" />
                                    <div className="flex justify-between items-center bg-primary/5 p-3 rounded-lg border border-primary/10">
                                        <Text className="font-bold text-primary italic">Total Gross Pay</Text>
                                        <Text className="font-bold text-primary text-lg">₱ {results.grossPay.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <h4 className="text-[10px] font-bold text-red-400 uppercase tracking-[0.2em] mb-4">Deductions</h4>
                                <div className="space-y-3">
                                    <ResultRow label="Withholding Tax" value={results.withholdingTax} />
                                    <ResultRow label="SSS/GSIS Contribution" value={results.sss} />
                                    <ResultRow label="PhilHealth Contribution" value={results.philhealth} />
                                    <ResultRow label="PAG-IBIG Contribution" value={results.pagibig} />
                                    <ResultRow label="Loans" value={results.loans} />
                                    <ResultRow label="Other Deductions" value={results.otherDeductions} />
                                    <Divider className="!my-2 border-gray-50" />
                                    <div className="flex justify-between items-center bg-primary/5 p-3 rounded-lg border border-primary/10">
                                        <Text className="font-bold text-primary italic">Total Deductions</Text>
                                        <Text className="font-bold text-primary text-lg">₱ {results.totalDeductions.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <div className="mx-8 md:mx-12 mt-4 p-8 rounded-xl bg-primary text-white flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-xl">
                        <Title level={3} className="!text-white mb-2">Need Business Payroll Solutions?</Title>
                        <Paragraph className="!text-white/70 mb-0 font-medium">
                            If you're looking for an automated system to handle hundreds of employees,
                            discover our enterprise-grade Payroll and HRIS system.
                        </Paragraph>
                    </div>
                    <button className="whitespace-nowrap px-8 py-4 bg-accent text-white rounded-lg font-bold hover:bg-accent/90 transition-all shadow-lg shadow-accent/20">
                        View HRIS System
                    </button>
                </div>
            </Card>
        </div>
    );
}

function ResultRow({ label, value }: { label: string; value: number }) {
    return (
        <div className="flex justify-between items-center py-1">
            <Text className="text-gray-500 font-medium">{label}</Text>
            <Text className="text-primary font-semibold">{value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
        </div>
    );
}
