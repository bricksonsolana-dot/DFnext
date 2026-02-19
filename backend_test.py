#!/usr/bin/env python3

import requests
import json
import sys
from datetime import datetime

# Base URL for API testing
BASE_URL = "https://digit-exp.preview.emergentagent.com/api"

def test_health_endpoint():
    """Test GET /api/health endpoint"""
    print("\n=== Testing Health Endpoint ===")
    try:
        response = requests.get(f"{BASE_URL}/health", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if "status" in data and data["status"] == "ok" and "timestamp" in data:
                print("✅ Health endpoint working correctly")
                return True
            else:
                print("❌ Health endpoint response format incorrect")
                return False
        else:
            print(f"❌ Health endpoint returned status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Health endpoint test failed: {str(e)}")
        return False

def test_contact_submission():
    """Test POST /api/contact endpoint with valid data"""
    print("\n=== Testing Contact Submission Endpoint ===")
    
    # Test data
    test_contact = {
        "name": "Sarah Johnson",
        "email": "sarah.johnson@techcorp.com", 
        "phone": "+1-555-0123",
        "message": "Hi, I'm interested in your web development services for our e-commerce platform. We need a complete redesign with modern features.",
        "budget": "10000-25000"
    }
    
    try:
        response = requests.post(
            f"{BASE_URL}/contact",
            json=test_contact,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 201:
            data = response.json()
            if data.get("success") is True and "id" in data and "message" in data:
                print("✅ Contact submission working correctly")
                return True, data.get("id")
            else:
                print("❌ Contact submission response format incorrect")
                return False, None
        else:
            print(f"❌ Contact submission returned status {response.status_code}")
            return False, None
            
    except Exception as e:
        print(f"❌ Contact submission test failed: {str(e)}")
        return False, None

def test_contact_validation():
    """Test POST /api/contact endpoint validation"""
    print("\n=== Testing Contact Validation ===")
    
    # Test missing name
    print("\n--- Testing missing name ---")
    try:
        response = requests.post(
            f"{BASE_URL}/contact",
            json={"email": "test@example.com", "message": "Test message"},
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 400:
            print("✅ Missing name validation working")
        else:
            print("❌ Missing name validation failed")
    except Exception as e:
        print(f"❌ Missing name validation test failed: {str(e)}")
    
    # Test missing email
    print("\n--- Testing missing email ---")
    try:
        response = requests.post(
            f"{BASE_URL}/contact",
            json={"name": "Test User", "message": "Test message"},
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 400:
            print("✅ Missing email validation working")
        else:
            print("❌ Missing email validation failed")
    except Exception as e:
        print(f"❌ Missing email validation test failed: {str(e)}")
    
    # Test missing message
    print("\n--- Testing missing message ---")
    try:
        response = requests.post(
            f"{BASE_URL}/contact",
            json={"name": "Test User", "email": "test@example.com"},
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 400:
            print("✅ Missing message validation working")
            return True
        else:
            print("❌ Missing message validation failed")
            return False
    except Exception as e:
        print(f"❌ Missing message validation test failed: {str(e)}")
        return False

def test_get_contacts(expected_contact_id=None):
    """Test GET /api/contacts endpoint"""
    print("\n=== Testing Get Contacts Endpoint ===")
    try:
        response = requests.get(f"{BASE_URL}/contacts", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if "contacts" in data and isinstance(data["contacts"], list):
                print(f"✅ Get contacts working - found {len(data['contacts'])} contacts")
                
                # Check if our test contact is in the list
                if expected_contact_id:
                    contact_found = any(contact.get("id") == expected_contact_id for contact in data["contacts"])
                    if contact_found:
                        print(f"✅ Test contact with ID {expected_contact_id} found in contacts list")
                    else:
                        print(f"⚠️  Test contact with ID {expected_contact_id} not found in contacts list")
                
                return True
            else:
                print("❌ Get contacts response format incorrect")
                return False
        else:
            print(f"❌ Get contacts returned status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Get contacts test failed: {str(e)}")
        return False

def main():
    """Run all backend API tests"""
    print("🚀 Starting Backend API Testing")
    print(f"Base URL: {BASE_URL}")
    print(f"Testing at: {datetime.now()}")
    
    results = {}
    
    # Test in priority order: high, medium, low
    
    # 1. Contact form submission API (high priority)
    contact_success, contact_id = test_contact_submission()
    results["contact_submission"] = contact_success
    
    # Test validation for contact submission
    validation_success = test_contact_validation()
    results["contact_validation"] = validation_success
    
    # 2. Get contacts API endpoint (medium priority)  
    contacts_success = test_get_contacts(contact_id if contact_success else None)
    results["get_contacts"] = contacts_success
    
    # 3. Health check API endpoint (low priority)
    health_success = test_health_endpoint()
    results["health_check"] = health_success
    
    # Summary
    print("\n" + "="*50)
    print("🎯 BACKEND API TEST SUMMARY")
    print("="*50)
    
    for test_name, success in results.items():
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{test_name}: {status}")
    
    total_tests = len(results)
    passed_tests = sum(results.values())
    
    print(f"\nOverall: {passed_tests}/{total_tests} tests passed")
    
    if passed_tests == total_tests:
        print("🎉 All backend API tests passed!")
        return 0
    else:
        print("⚠️  Some backend API tests failed")
        return 1

if __name__ == "__main__":
    exit_code = main()
    sys.exit(exit_code)