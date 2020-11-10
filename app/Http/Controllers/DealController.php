<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Deals;

class DealController extends Controller
{
    public function dealList() {
        $data = DB::table('deals')->get() ;
        $response = (object) [
            'deal_list' => $data,
            'status' => 1,
        ];
        return response()->json($response);
    }

    public function addDeal(Request $request) {
        $dealItem = new Deals;
        $dealItem->contact = $request->get('contact') ;
        $dealItem->title = $request->get('title') ;
        $dealItem->stage = $request->get('stage') ;
        $dealItem->deadline = $request->get('deadline') ;
        $dealItem->lead_id = $request->get('lead_id') ;
        $dealItem->responsible = 1;
        $dealItem->probability = 1;
        $dealItem->save() ;
        $data = DB::table('deals')->get() ;
        $response = (object) [
            'deal_list' => $data,
            'status' => 1,
        ];
        return response()->json($response);
    }

    public function editDeal(Request $request) {
        $dealItem = Deals::find($request->get('id'));
        $dealItem->contact = $request->get('contact') ;
        $dealItem->title = $request->get('title') ;
        $dealItem->stage = $request->get('stage') ;
        $dealItem->deadline = $request->get('deadline') ;
        $dealItem->save() ;
        $data = DB::table('deals')->get() ;
        $response = (object) [
            'deal_list' => $data,
            'status' => 1,
        ];
        return response()->json($response);
    }

    public function deleteDeals(Request $request) {
        foreach($request->get('ids') as $id)
            DB::table('deals')->delete($id);
        $data = DB::table('deals')->get() ;
        $response = (object) [
            'deal_list' => $data,
            'status' => 1,
        ];
        return response()->json($response);
    }
}
