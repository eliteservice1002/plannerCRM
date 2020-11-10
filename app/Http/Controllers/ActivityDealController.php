<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\ActivitiesDeal;

class ActivityDealController extends Controller
{
    public function activityList(Request $request) {
        $deal_id = $request->get('deal_id') ;
        $data = [] ;
        if($deal_id)
            $data = DB::table('activities_deal')->where('deal_id', $deal_id)->orderByRaw('created_at DESC')->get() ;
        $response = (object) [
            'activity_list' => $data,
            'status' => 1,
        ];
        return response()->json($response);
    }

    public function addActivity(Request $request) {
        $activityItem = new ActivitiesDeal;
        $activityItem->user_id = $request->get('user_id') ;
        $activityItem->deal_id = $request->get('deal_id') ;
        $activityItem->description = $request->get('description') ;
        $activityItem->save() ;
        $data = DB::table('activities_deal')->where('deal_id', $activityItem->deal_id)->orderByRaw('created_at DESC')->get() ;
        $response = (object) [
            'activity_list' => $data,
            'status' => 1,
        ];
        return response()->json($response);
    }
}
