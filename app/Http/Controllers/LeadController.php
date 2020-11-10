<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Leads;

class LeadController extends Controller
{
    public function leadList() {
        $data = DB::table('leads')->get() ;
        $response = (object) [
            'lead_list' => $data,
            'status' => 1,
        ];
        return response()->json($response);
    }

    public function getLead($id) {
        $data = Leads::find($id) ;
        $response = (object) [
            'lead' => $data,
            'status' => 1,
        ];
        return response()->json($response);
    }

    public function addLead(Request $request) {
        $leadItem = new Leads;
        $leadItem->contact = $request->get('contact') ;
        $leadItem->company = $request->get('company') ;
        $leadItem->email = $request->get('email') ;
        $leadItem->address = $request->get('address') ;
        $leadItem->origin = $request->get('origin') ;
        $leadItem->telephone = $request->get('telephone') ;
        $leadItem->priority = 1;
        $leadItem->save() ;
        $data = DB::table('leads')->get() ;
        $response = (object) [
            'lead_list' => $data,
            'status' => 1,
        ];
        return response()->json($response);
    }

    public function editLead(Request $request) {
        $leadItem = Leads::find($request->get('id'));
        $leadItem->contact = $request->get('contact') ;
        $leadItem->company = $request->get('company') ;
        $leadItem->email = $request->get('email') ;
        $leadItem->address = $request->get('address') ;
        $leadItem->origin = $request->get('origin') ;
        $leadItem->telephone = $request->get('telephone') ;
        $leadItem->save() ;
        $data = DB::table('leads')->get() ;
        $response = (object) [
            'lead_list' => $data,
            'status' => 1,
        ];
        return response()->json($response);
    }

    public function deleteLeads(Request $request) {
        foreach($request->get('ids') as $id)
            DB::table('leads')->delete($id);
        $data = DB::table('leads')->get() ;
        $response = (object) [
            'lead_list' => $data,
            'status' => 1,
        ];
        return response()->json($response);
    }
}
