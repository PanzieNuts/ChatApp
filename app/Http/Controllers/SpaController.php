<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SpaController extends Controller
{
    public function index() {
        return view('layouts.app');
    }

    // public function addAccount(Request $request){
    //     try {
    //         \DB::beginTransaction();
    //         $accounts = new Accounts();
    //         $accounts->EmployeeCode = $request->EmployeeCode;
    //         $accounts->EmployeeName = $request->EmployeeName;
    //         $accounts->DepartmentName = $request->DepartmentName;
    //         $accounts->SectionName = $request->SectionName;
    //         $accounts->TeamName = $request->TeamName;
    //         $accounts->Password = $request->Password;
    //         $accounts->save();
    //         \DB::commit();
    //     } catch (\Throwable $th) {
    //         \DB::rollback();
    //     }
    // }

    // public function getCars()
    // {
    //     try {
    //         $accounts = Cars::all();
    //         return response()->json($cars, 200);
    //     } catch (\Throwable $th) {
    //         return response()->json(['error' => $th->getMessage()], 400);
    //     }
    // }

    // public function getCompanies(){
    //     return Company::withoutTrashed()->get();
    // }
    
}
