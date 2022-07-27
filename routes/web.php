<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
});

Route::get('/market-overview', function () {
    return Inertia::render('Admin/MarketOverview');
});



require __DIR__ . '/auth.php';
