'use client';

import React from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

function MainCurrencyConvertor() {
    const [amount, setAmount] = React.useState('');
    const [fromCurrency, setFromCurrency] = React.useState('USD');
    const [toCurrency, setToCurrency] = React.useState('INR');
    const [converted, setConverted] = React.useState('');

    async function updateRate() {
        if (!amount) return;

        try {
            const response = await fetch(
                `https://v6.exchangerate-api.com/v6/ae1583d1db5b90ba6fde629b/latest/${fromCurrency}`
            );

            const data = await response.json();

            if (data.result !== 'success') {
                console.log('API error:', data);
                return;
            }

            const rate = data.conversion_rates[toCurrency];
            const convertedAmount = Number(amount) * rate;

            setConverted(convertedAmount.toFixed(2));
        } catch (error) {
            console.log('Fetch error:', error);
        }
    }

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    py: 4,
                }}
            >
                <Card
                    elevation={6}
                    sx={{
                        width: '100%',
                        borderRadius: 4,
                    }}
                >
                    <CardContent sx={{ p: 4 }}>
                        <Stack spacing={3}>
                            <Box textAlign="center">
                                <Typography variant="h4" fontWeight={700}>
                                    Currency Converter
                                </Typography>

                                <Typography variant="body2" color="text.secondary" mt={1}>
                                    Convert currencies quickly and easily
                                </Typography>
                            </Box>

                            <Stack spacing={2}>
                                <TextField
                                    fullWidth
                                    label="Amount"
                                    type="number"
                                    placeholder="Enter amount"
                                    value={amount}
                                    onChange={(event) => setAmount(event.target.value)}
                                />

                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                    <FormControl fullWidth>
                                        <InputLabel>From</InputLabel>
                                        <Select
                                            label="From"
                                            value={fromCurrency}
                                            onChange={(event) => setFromCurrency(event.target.value)}
                                        >
                                            <MenuItem value="USD">USD - US Dollar</MenuItem>
                                            <MenuItem value="EUR">EUR - Euro</MenuItem>
                                            <MenuItem value="GBP">GBP - British Pound</MenuItem>
                                            <MenuItem value="INR">INR - Indian Rupee</MenuItem>
                                        </Select>
                                    </FormControl>

                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Button
                                            variant="outlined"
                                            sx={{
                                                minWidth: 48,
                                                height: 48,
                                                borderRadius: '50%',
                                            }}
                                        >
                                            <SwapHorizIcon />
                                        </Button>
                                    </Box>

                                    <FormControl fullWidth>
                                        <InputLabel>To</InputLabel>
                                        <Select
                                            label="To"
                                            value={toCurrency}
                                            onChange={(event) => setToCurrency(event.target.value)}
                                        >
                                            <MenuItem value="USD">USD - US Dollar</MenuItem>
                                            <MenuItem value="EUR">EUR - Euro</MenuItem>
                                            <MenuItem value="GBP">GBP - British Pound</MenuItem>
                                            <MenuItem value="INR">INR - Indian Rupee</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Stack>
                            </Stack>

                            <Button size="large" variant="contained" fullWidth onClick={updateRate}>
                                Convert
                            </Button>

                            <Box
                                sx={{
                                    p: 3,
                                    borderRadius: 3,
                                    bgcolor: 'grey.100',
                                    textAlign: 'center',
                                }}
                            >
                                <Typography variant="body2" color="text.secondary">
                                    Converted Amount
                                </Typography>

                                <Typography variant="h5" fontWeight={700} mt={1}>
                                    {converted || '0.00'}
                                </Typography>
                            </Box>
                        </Stack>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
}

export default MainCurrencyConvertor;