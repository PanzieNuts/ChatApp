<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// Route::prefix('/APIPATH')->group(function(){
//     Route::post('apiname', [AccountsController::class, 'functionName']);
//     Route::get('apiname', [AccountsController::class, 'functionName']);
// });

