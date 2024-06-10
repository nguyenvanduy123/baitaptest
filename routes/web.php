<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\TasksController;
Route::get('/', function () {

    return Inertia::render('Login', [
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::middleware('auth')->group(function () {
    Route::get('/load-menu', [MenuController::class, 'LoadMenu']);
    Route::group(['prefix' => 'Tasks'], function (): void {
        Route::get('/tasks',[TasksController::class, 'loadTask']);
        Route::get('/tasks-table', [TasksController::class, 'loadTableTask']);
        Route::post('/status-change', [TasksController::class, 'statusChage']);
    });

});

require __DIR__.'/auth.php';
