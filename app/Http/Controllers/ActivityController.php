<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Activities;

class ActivityController extends Controller
{
    public function activityList(Request $request) {
        $lead_id = $request->get('lead_id') ;
        $data = [] ;
        if($lead_id)
            $data = DB::table('activities')->where('lead_id', $lead_id)->orderByRaw('created_at DESC')->get() ;
        $response = (object) [
            'activity_list' => $data,
            'status' => 1,
        ];
        return response()->json($response);
    }

    public function addActivity(Request $request) {
        $activityItem = new Activities;
        $activityItem->user_id = $request->get('user_id') ;
        $activityItem->lead_id = $request->get('lead_id') ;
        $activityItem->description = $request->get('description') ;
        $activityItem->save() ;
        $data = DB::table('activities')->where('lead_id', $activityItem->lead_id)->orderByRaw('created_at DESC')->get() ;
        $response = (object) [
            'activity_list' => $data,
            'status' => 1,
        ];
        return response()->json($response);
    }
}
