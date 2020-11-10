<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/users_list', 'UserController@userList');
Route::post('/register', 'UserController@addUser');
Route::post('/register_profile', 'UserController@addUserProfile');
Route::post('/login','UserController@loginUser');

Route::post('/leads', 'LeadController@leadList');
Route::post('/leads/{id}', 'LeadController@getLead');
Route::put('/leads/add', 'LeadController@addLead');
Route::put('/leads/edit', 'LeadController@editLead');
Route::post('/lead/delete', 'LeadController@deleteLeads');

Route::post('/activities', 'ActivityController@activityList');
Route::post('/activity/add', 'ActivityController@addActivity') ;

Route::post('/deals', 'DealController@dealList');
Route::post('/deals/add', 'DealController@addDeal');
Route::post('/deals/edit', 'DealController@editDeal');
Route::post('/deals/delete', 'DealController@deleteDeals');

Route::post('/activities_deal', 'ActivityDealController@activityList');
Route::post('/activity_deal/add', 'ActivityDealController@addActivity') ;
