<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Users;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function userList() {
        $data = DB::table('users')->get() ;
        $response = (object) [
            'user_list' => $data,
            'status' => 1,
        ];
        return response()->json($response);
    }

    public function addUser(Request $request) {
        $testItem = Users::where('email', $request->get('email'))->first();
        if($testItem) {
            $error_response = (object) [
                'error' => 'Este "E-mail" já está cadastrado',
                'status' => 0,
            ];
            return response()->json($error_response);
        }
        $userItem = new Users;
        $userItem->name = $request->get('name') ;
        $userItem->business_name = $request->get('business_name') ;
        $userItem->email = $request->get('email') ;
        $userItem->role = 1;
        $userItem->password = Hash::make($request->get('password'));
        $userItem->register_flag = 0;
        $userItem->job_title = "";
        $userItem->company = "";
        $userItem->number_people = "";
        $userItem->telephone = "";
        $userItem->save() ;
        $data = DB::table('users')->where('id',DB::raw("(select max(`id`) from users)"))->first() ;
        $response = (object) [
            'userInfo' => (object) [
                'uid' => $data->id,
                'displayName' => $data->name,
            ],
            'status' => 1,
        ];
        return response()->json($response);
    }

    public function addUserProfile(Request $request) {
        $userItem = Users::find($request->get('id'));
        $userItem->job_title = $request->get('job_title') ;
        $userItem->company = $request->get('company') ;
        $userItem->telephone = $request->get('telephone') ;
        $userItem->number_people = $request->get('number_people') ;
        $userItem->register_flag = 1;
        $userItem->save() ;
        $response = (object) [
            'status' => 1,
        ];
        return response()->json($response);
    }

    public function deleteUser($id) {
        DB::table('users')->delete($id);
        return $id;
    }

    public function loginUser(Request $request) {
        $username = $request->get('username') ;
        $password = $request->get('password') ;

        $error = "Something went wrong" ;

        $user = Users::where('name',$username)->first() ;
        if($user) {
            if(Hash::check($password, $user->password)) {
                $accessToken = Str::random(60) ;
                $user->remember_token = $accessToken;
                $user->save() ;

                $response = (object) [
                    'userInfo' => (object) [
                        'uid' => $user->id,
                        'displayName' => $user->name,
                    ],
                    'userRole' => $user->role,
                    'accessToken' => $accessToken,
                    'status' => 1,
                ];
                return response()->json($response);
            }
            else {
                $error = "E-Mail ou senha incorretos" ;
            }
        }
        else {
            $error = "E-Mail ou senha incorretos" ;
        }
        $error_response = (object) [
            'error' => $error,
            'status' => 0,
        ];
        return response()->json($error_response);
    }
}
