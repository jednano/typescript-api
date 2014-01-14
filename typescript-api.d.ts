///<reference path='bower_components/dt-node/node.d.ts'/>
declare module "typescript-api" {
	var DiagnosticCode: {
		error_TS_0_1: string;
		warning_TS_0_1: string;
		Unrecognized_escape_sequence: string;
		Unexpected_character_0: string;
		Missing_close_quote_character: string;
		Identifier_expected: string;
		_0_keyword_expected: string;
		_0_expected: string;
		Identifier_expected_0_is_a_keyword: string;
		Automatic_semicolon_insertion_not_allowed: string;
		Unexpected_token_0_expected: string;
		Trailing_separator_not_allowed: string;
		AsteriskSlash_expected: string;
		public_or_private_modifier_must_precede_static: string;
		Unexpected_token: string;
		Catch_clause_parameter_cannot_have_a_type_annotation: string;
		Rest_parameter_must_be_last_in_list: string;
		Parameter_cannot_have_question_mark_and_initializer: string;
		Required_parameter_cannot_follow_optional_parameter: string;
		Index_signatures_cannot_have_rest_parameters: string;
		Index_signature_parameter_cannot_have_accessibility_modifiers: string;
		Index_signature_parameter_cannot_have_a_question_mark: string;
		Index_signature_parameter_cannot_have_an_initializer: string;
		Index_signature_must_have_a_type_annotation: string;
		Index_signature_parameter_must_have_a_type_annotation: string;
		Index_signature_parameter_type_must_be_string_or_number: string;
		extends_clause_already_seen: string;
		extends_clause_must_precede_implements_clause: string;
		Classes_can_only_extend_a_single_class: string;
		implements_clause_already_seen: string;
		Accessibility_modifier_already_seen: string;
		_0_modifier_must_precede_1_modifier: string;
		_0_modifier_already_seen: string;
		_0_modifier_cannot_appear_on_a_class_element: string;
		Interface_declaration_cannot_have_implements_clause: string;
		super_invocation_cannot_have_type_arguments: string;
		Only_ambient_modules_can_use_quoted_names: string;
		Statements_are_not_allowed_in_ambient_contexts: string;
		Implementations_are_not_allowed_in_ambient_contexts: string;
		declare_modifier_not_allowed_for_code_already_in_an_ambient_context: string;
		Initializers_are_not_allowed_in_ambient_contexts: string;
		Parameter_property_declarations_can_only_be_used_in_constructors: string;
		Function_implementation_expected: string;
		Constructor_implementation_expected: string;
		Function_overload_name_must_be_0: string;
		_0_modifier_cannot_appear_on_a_module_element: string;
		declare_modifier_cannot_appear_on_an_interface_declaration: string;
		declare_modifier_required_for_top_level_element: string;
		Rest_parameter_cannot_be_optional: string;
		Rest_parameter_cannot_have_an_initializer: string;
		set_accessor_must_have_one_and_only_one_parameter: string;
		set_accessor_parameter_cannot_be_optional: string;
		set_accessor_parameter_cannot_have_an_initializer: string;
		set_accessor_cannot_have_rest_parameter: string;
		get_accessor_cannot_have_parameters: string;
		Modifiers_cannot_appear_here: string;
		Accessors_are_only_available_when_targeting_ECMAScript_5_and_higher: string;
		Class_name_cannot_be_0: string;
		Interface_name_cannot_be_0: string;
		Enum_name_cannot_be_0: string;
		Module_name_cannot_be_0: string;
		Enum_member_must_have_initializer: string;
		Export_assignment_cannot_be_used_in_internal_modules: string;
		Export_assignment_not_allowed_in_module_with_exported_element: string;
		Module_cannot_have_multiple_export_assignments: string;
		Ambient_enum_elements_can_only_have_integer_literal_initializers: string;
		module_class_interface_enum_import_or_statement: string;
		constructor_function_accessor_or_variable: string;
		statement: string;
		case_or_default_clause: string;
		identifier: string;
		call_construct_index_property_or_function_signature: string;
		expression: string;
		type_name: string;
		property_or_accessor: string;
		parameter: string;
		type: string;
		type_parameter: string;
		declare_modifier_not_allowed_on_import_declaration: string;
		Function_overload_must_be_static: string;
		Function_overload_must_not_be_static: string;
		Parameter_property_declarations_cannot_be_used_in_an_ambient_context: string;
		Parameter_property_declarations_cannot_be_used_in_a_constructor_overload: string;
		Invalid_reference_directive_syntax: string;
		Octal_literals_are_not_available_when_targeting_ECMAScript_5_and_higher: string;
		Accessors_are_not_allowed_in_ambient_contexts: string;
		_0_modifier_cannot_appear_on_a_constructor_declaration: string;
		_0_modifier_cannot_appear_on_a_parameter: string;
		Duplicate_identifier_0: string;
		The_name_0_does_not_exist_in_the_current_scope: string;
		The_name_0_does_not_refer_to_a_value: string;
		super_can_only_be_used_inside_a_class_instance_method: string;
		The_left_hand_side_of_an_assignment_expression_must_be_a_variable_property_or_indexer: string;
		Value_of_type_0_is_not_callable_Did_you_mean_to_include_new: string;
		Value_of_type_0_is_not_callable: string;
		Value_of_type_0_is_not_newable: string;
		Value_of_type_0_is_not_indexable_by_type_1: string;
		Operator_0_cannot_be_applied_to_types_1_and_2: string;
		Operator_0_cannot_be_applied_to_types_1_and_2_3: string;
		Cannot_convert_0_to_1: string;
		Cannot_convert_0_to_1_NL_2: string;
		Expected_var_class_interface_or_module: string;
		Operator_0_cannot_be_applied_to_type_1: string;
		Getter_0_already_declared: string;
		Setter_0_already_declared: string;
		Exported_class_0_extends_private_class_1: string;
		Exported_class_0_implements_private_interface_1: string;
		Exported_interface_0_extends_private_interface_1: string;
		Exported_class_0_extends_class_from_inaccessible_module_1: string;
		Exported_class_0_implements_interface_from_inaccessible_module_1: string;
		Exported_interface_0_extends_interface_from_inaccessible_module_1: string;
		Public_static_property_0_of_exported_class_has_or_is_using_private_type_1: string;
		Public_property_0_of_exported_class_has_or_is_using_private_type_1: string;
		Property_0_of_exported_interface_has_or_is_using_private_type_1: string;
		Exported_variable_0_has_or_is_using_private_type_1: string;
		Public_static_property_0_of_exported_class_is_using_inaccessible_module_1: string;
		Public_property_0_of_exported_class_is_using_inaccessible_module_1: string;
		Property_0_of_exported_interface_is_using_inaccessible_module_1: string;
		Exported_variable_0_is_using_inaccessible_module_1: string;
		Parameter_0_of_constructor_from_exported_class_has_or_is_using_private_type_1: string;
		Parameter_0_of_public_static_property_setter_from_exported_class_has_or_is_using_private_type_1: string;
		Parameter_0_of_public_property_setter_from_exported_class_has_or_is_using_private_type_1: string;
		Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_type_1: string;
		Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_type_1: string;
		Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_type_1: string;
		Parameter_0_of_public_method_from_exported_class_has_or_is_using_private_type_1: string;
		Parameter_0_of_method_from_exported_interface_has_or_is_using_private_type_1: string;
		Parameter_0_of_exported_function_has_or_is_using_private_type_1: string;
		Parameter_0_of_constructor_from_exported_class_is_using_inaccessible_module_1: string;
		Parameter_0_of_public_static_property_setter_from_exported_class_is_using_inaccessible_module_1: string;
		Parameter_0_of_public_property_setter_from_exported_class_is_using_inaccessible_module_1: string;
		Parameter_0_of_constructor_signature_from_exported_interface_is_using_inaccessible_module_1: string;
		Parameter_0_of_call_signature_from_exported_interface_is_using_inaccessible_module_1: string;
		Parameter_0_of_public_static_method_from_exported_class_is_using_inaccessible_module_1: string;
		Parameter_0_of_public_method_from_exported_class_is_using_inaccessible_module_1: string;
		Parameter_0_of_method_from_exported_interface_is_using_inaccessible_module_1: string;
		Parameter_0_of_exported_function_is_using_inaccessible_module_1: string;
		Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_private_type_0: string;
		Return_type_of_public_property_getter_from_exported_class_has_or_is_using_private_type_0: string;
		Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_private_type_0: string;
		Return_type_of_call_signature_from_exported_interface_has_or_is_using_private_type_0: string;
		Return_type_of_index_signature_from_exported_interface_has_or_is_using_private_type_0: string;
		Return_type_of_public_static_method_from_exported_class_has_or_is_using_private_type_0: string;
		Return_type_of_public_method_from_exported_class_has_or_is_using_private_type_0: string;
		Return_type_of_method_from_exported_interface_has_or_is_using_private_type_0: string;
		Return_type_of_exported_function_has_or_is_using_private_type_0: string;
		Return_type_of_public_static_property_getter_from_exported_class_is_using_inaccessible_module_0: string;
		Return_type_of_public_property_getter_from_exported_class_is_using_inaccessible_module_0: string;
		Return_type_of_constructor_signature_from_exported_interface_is_using_inaccessible_module_0: string;
		Return_type_of_call_signature_from_exported_interface_is_using_inaccessible_module_0: string;
		Return_type_of_index_signature_from_exported_interface_is_using_inaccessible_module_0: string;
		Return_type_of_public_static_method_from_exported_class_is_using_inaccessible_module_0: string;
		Return_type_of_public_method_from_exported_class_is_using_inaccessible_module_0: string;
		Return_type_of_method_from_exported_interface_is_using_inaccessible_module_0: string;
		Return_type_of_exported_function_is_using_inaccessible_module_0: string;
		new_T_cannot_be_used_to_create_an_array_Use_new_Array_T_instead: string;
		A_parameter_list_must_follow_a_generic_type_argument_list_expected: string;
		Multiple_constructor_implementations_are_not_allowed: string;
		Unable_to_resolve_external_module_0: string;
		Module_cannot_be_aliased_to_a_non_module_type: string;
		A_class_may_only_extend_another_class: string;
		A_class_may_only_implement_another_class_or_interface: string;
		An_interface_may_only_extend_another_class_or_interface: string;
		Unable_to_resolve_type: string;
		Unable_to_resolve_type_of_0: string;
		Unable_to_resolve_type_parameter_constraint: string;
		Type_parameter_constraint_cannot_be_a_primitive_type: string;
		Supplied_parameters_do_not_match_any_signature_of_call_target: string;
		Supplied_parameters_do_not_match_any_signature_of_call_target_NL_0: string;
		Invalid_new_expression: string;
		Call_signatures_used_in_a_new_expression_must_have_a_void_return_type: string;
		Could_not_select_overload_for_new_expression: string;
		Type_0_does_not_satisfy_the_constraint_1_for_type_parameter_2: string;
		Could_not_select_overload_for_call_expression: string;
		Cannot_invoke_an_expression_whose_type_lacks_a_call_signature: string;
		Calls_to_super_are_only_valid_inside_a_class: string;
		Generic_type_0_requires_1_type_argument_s: string;
		Type_of_array_literal_cannot_be_determined_Best_common_type_could_not_be_found_for_array_elements: string;
		Could_not_find_enclosing_symbol_for_dotted_name_0: string;
		The_property_0_does_not_exist_on_value_of_type_1: string;
		Could_not_find_symbol_0: string;
		get_and_set_accessor_must_have_the_same_type: string;
		this_cannot_be_referenced_in_current_location: string;
		Static_methods_cannot_reference_class_type_parameters: string;
		Class_0_is_recursively_referenced_as_a_base_type_of_itself: string;
		Interface_0_is_recursively_referenced_as_a_base_type_of_itself: string;
		super_property_access_is_permitted_only_in_a_constructor_member_function_or_member_accessor_of_a_derived_class: string;
		super_cannot_be_referenced_in_non_derived_classes: string;
		A_super_call_must_be_the_first_statement_in_the_constructor_when_a_class_contains_initialized_properties_or_has_parameter_properties: string;
		Constructors_for_derived_classes_must_contain_a_super_call: string;
		Super_calls_are_not_permitted_outside_constructors_or_in_local_functions_inside_constructors: string;
		_0_1_is_inaccessible: string;
		this_cannot_be_referenced_within_module_bodies: string;
		Invalid_expression_types_not_known_to_support_the_addition_operator: string;
		The_right_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_or_an_enum_type: string;
		The_left_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_or_an_enum_type: string;
		The_type_of_a_unary_arithmetic_operation_operand_must_be_of_type_any_number_or_an_enum_type: string;
		Variable_declarations_of_a_for_statement_cannot_use_a_type_annotation: string;
		Variable_declarations_of_a_for_statement_must_be_of_types_string_or_any: string;
		The_right_hand_side_of_a_for_in_statement_must_be_of_type_any_an_object_type_or_a_type_parameter: string;
		The_left_hand_side_of_an_in_expression_must_be_of_types_any_string_or_number: string;
		The_right_hand_side_of_an_in_expression_must_be_of_type_any_an_object_type_or_a_type_parameter: string;
		The_left_hand_side_of_an_instanceof_expression_must_be_of_type_any_an_object_type_or_a_type_parameter: string;
		The_right_hand_side_of_an_instanceof_expression_must_be_of_type_any_or_a_subtype_of_the_Function_interface_type: string;
		Setters_cannot_return_a_value: string;
		Tried_to_query_type_of_uninitialized_module_0: string;
		Tried_to_set_variable_type_to_uninitialized_module_type_0: string;
		Function_0_declared_a_non_void_return_type_but_has_no_return_expression: string;
		Getters_must_return_a_value: string;
		Getter_and_setter_accessors_do_not_agree_in_visibility: string;
		Invalid_left_hand_side_of_assignment_expression: string;
		Function_declared_a_non_void_return_type_but_has_no_return_expression: string;
		Cannot_resolve_return_type_reference: string;
		Constructors_cannot_have_a_return_type_of_void: string;
		Subsequent_variable_declarations_must_have_the_same_type_Variable_0_must_be_of_type_1_but_here_has_type_2: string;
		All_symbols_within_a_with_block_will_be_resolved_to_any: string;
		Import_declarations_in_an_internal_module_cannot_reference_an_external_module: string;
		Class_0_declares_interface_1_but_does_not_implement_it_NL_2: string;
		Class_0_declares_class_1_as_an_interface_but_does_not_implement_it_NL_2: string;
		The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_property_or_indexer: string;
		this_cannot_be_referenced_in_static_initializers_in_a_class_body: string;
		Class_0_cannot_extend_class_1_NL_2: string;
		Interface_0_cannot_extend_class_1_NL_2: string;
		Interface_0_cannot_extend_interface_1_NL_2: string;
		Duplicate_overload_signature_for_0: string;
		Duplicate_constructor_overload_signature: string;
		Duplicate_overload_call_signature: string;
		Duplicate_overload_construct_signature: string;
		Overload_signature_is_not_compatible_with_function_definition: string;
		Overload_signature_is_not_compatible_with_function_definition_NL_0: string;
		Overload_signatures_must_all_be_public_or_private: string;
		Overload_signatures_must_all_be_exported_or_not_exported: string;
		Overload_signatures_must_all_be_ambient_or_non_ambient: string;
		Overload_signatures_must_all_be_optional_or_required: string;
		Specialized_overload_signature_is_not_subtype_of_any_non_specialized_signature: string;
		this_cannot_be_referenced_in_constructor_arguments: string;
		Instance_member_cannot_be_accessed_off_a_class: string;
		Untyped_function_calls_may_not_accept_type_arguments: string;
		Non_generic_functions_may_not_accept_type_arguments: string;
		A_generic_type_may_not_reference_itself_with_a_wrapped_form_of_its_own_type_parameters: string;
		Rest_parameters_must_be_array_types: string;
		Overload_signature_implementation_cannot_use_specialized_type: string;
		Export_assignments_may_only_be_used_at_the_top_level_of_external_modules: string;
		Export_assignments_may_only_be_made_with_variables_functions_classes_interfaces_enums_and_internal_modules: string;
		Only_public_methods_of_the_base_class_are_accessible_via_the_super_keyword: string;
		Numeric_indexer_type_0_must_be_a_subtype_of_string_indexer_type_1: string;
		Numeric_indexer_type_0_must_be_a_subtype_of_string_indexer_type_1_NL_2: string;
		All_numerically_named_properties_must_be_subtypes_of_numeric_indexer_type_0: string;
		All_numerically_named_properties_must_be_subtypes_of_numeric_indexer_type_0_NL_1: string;
		All_named_properties_must_be_subtypes_of_string_indexer_type_0: string;
		All_named_properties_must_be_subtypes_of_string_indexer_type_0_NL_1: string;
		Generic_type_references_must_include_all_type_arguments: string;
		Default_arguments_are_not_allowed_in_an_overload_parameter: string;
		Overloads_cannot_differ_only_by_return_type: string;
		Function_expression_declared_a_non_void_return_type_but_has_no_return_expression: string;
		Import_declaration_referencing_identifier_from_internal_module_can_only_be_made_with_variables_functions_classes_interfaces_enums_and_internal_modules: string;
		Could_not_find_symbol_0_in_module_1: string;
		Unable_to_resolve_module_reference_0: string;
		Could_not_find_module_0_in_module_1: string;
		Exported_import_declaration_0_is_assigned_value_with_type_that_has_or_is_using_private_type_1: string;
		Exported_import_declaration_0_is_assigned_value_with_type_that_is_using_inaccessible_module_1: string;
		Exported_import_declaration_0_is_assigned_type_that_has_or_is_using_private_type_1: string;
		Exported_import_declaration_0_is_assigned_type_that_is_using_inaccessible_module_1: string;
		Exported_import_declaration_0_is_assigned_container_that_is_or_is_using_inaccessible_module_1: string;
		Type_reference_0_in_extends_clause_does_not_reference_constructor_function_for_1: string;
		Internal_module_reference_0_in_import_declaration_does_not_reference_module_instance_for_1: string;
		Module_0_cannot_merge_with_previous_declaration_of_1_in_a_different_file_2: string;
		Interface_0_cannot_simultaneously_extend_types_1_and_2_NL_3: string;
		Initializer_of_parameter_0_cannot_reference_identifier_1_declared_after_it: string;
		Ambient_external_module_declaration_cannot_be_reopened: string;
		All_declarations_of_merged_declaration_0_must_be_exported_or_not_exported: string;
		super_cannot_be_referenced_in_constructor_arguments: string;
		Return_type_of_constructor_signature_must_be_assignable_to_the_instance_type_of_the_class: string;
		Ambient_external_module_declaration_must_be_defined_in_global_context: string;
		Ambient_external_module_declaration_cannot_specify_relative_module_name: string;
		Import_declaration_in_an_ambient_external_module_declaration_cannot_reference_external_module_through_relative_external_module_name: string;
		Could_not_find_the_best_common_type_of_types_of_all_return_statement_expressions: string;
		Import_declaration_cannot_refer_to_external_module_reference_when_noResolve_option_is_set: string;
		Duplicate_identifier_this_Compiler_uses_variable_declaration_this_to_capture_this_reference: string;
		continue_statement_can_only_be_used_within_an_enclosing_iteration_statement: string;
		break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement: string;
		Jump_target_not_found: string;
		Jump_target_cannot_cross_function_boundary: string;
		Duplicate_identifier_super_Compiler_uses_super_to_capture_base_class_reference: string;
		Expression_resolves_to_variable_declaration_this_that_compiler_uses_to_capture_this_reference: string;
		Expression_resolves_to_super_that_compiler_uses_to_capture_base_class_reference: string;
		TypeParameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_type_1: string;
		TypeParameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_type_1: string;
		TypeParameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_type_1: string;
		TypeParameter_0_of_public_method_from_exported_class_has_or_is_using_private_type_1: string;
		TypeParameter_0_of_method_from_exported_interface_has_or_is_using_private_type_1: string;
		TypeParameter_0_of_exported_function_has_or_is_using_private_type_1: string;
		TypeParameter_0_of_constructor_signature_from_exported_interface_is_using_inaccessible_module_1: string;
		TypeParameter_0_of_call_signature_from_exported_interface_is_using_inaccessible_module_1: string;
		TypeParameter_0_of_public_static_method_from_exported_class_is_using_inaccessible_module_1: string;
		TypeParameter_0_of_public_method_from_exported_class_is_using_inaccessible_module_1: string;
		TypeParameter_0_of_method_from_exported_interface_is_using_inaccessible_module_1: string;
		TypeParameter_0_of_exported_function_is_using_inaccessible_module_1: string;
		TypeParameter_0_of_exported_class_has_or_is_using_private_type_1: string;
		TypeParameter_0_of_exported_interface_has_or_is_using_private_type_1: string;
		TypeParameter_0_of_exported_class_is_using_inaccessible_module_1: string;
		TypeParameter_0_of_exported_interface_is_using_inaccessible_module_1: string;
		Duplicate_identifier_i_Compiler_uses_i_to_initialize_rest_parameter: string;
		Duplicate_identifier_arguments_Compiler_uses_arguments_to_initialize_rest_parameters: string;
		Type_of_conditional_0_must_be_identical_to_1_or_2: string;
		Type_of_conditional_0_must_be_identical_to_1_2_or_3: string;
		Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_an_external_module: string;
		Type_0_is_missing_property_1_from_type_2: string;
		Types_of_property_0_of_types_1_and_2_are_incompatible: string;
		Types_of_property_0_of_types_1_and_2_are_incompatible_NL_3: string;
		Property_0_defined_as_private_in_type_1_is_defined_as_public_in_type_2: string;
		Property_0_defined_as_public_in_type_1_is_defined_as_private_in_type_2: string;
		Types_0_and_1_define_property_2_as_private: string;
		Call_signatures_of_types_0_and_1_are_incompatible: string;
		Call_signatures_of_types_0_and_1_are_incompatible_NL_2: string;
		Type_0_requires_a_call_signature_but_type_1_lacks_one: string;
		Construct_signatures_of_types_0_and_1_are_incompatible: string;
		Construct_signatures_of_types_0_and_1_are_incompatible_NL_2: string;
		Type_0_requires_a_construct_signature_but_type_1_lacks_one: string;
		Index_signatures_of_types_0_and_1_are_incompatible: string;
		Index_signatures_of_types_0_and_1_are_incompatible_NL_2: string;
		Call_signature_expects_0_or_fewer_parameters: string;
		Could_not_apply_type_0_to_argument_1_which_is_of_type_2: string;
		Class_0_defines_instance_member_accessor_1_but_extended_class_2_defines_it_as_instance_member_function: string;
		Class_0_defines_instance_member_property_1_but_extended_class_2_defines_it_as_instance_member_function: string;
		Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_accessor: string;
		Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_property: string;
		Types_of_static_property_0_of_class_1_and_class_2_are_incompatible: string;
		Types_of_static_property_0_of_class_1_and_class_2_are_incompatible_NL_3: string;
		Type_reference_cannot_refer_to_container_0: string;
		Type_reference_must_refer_to_type: string;
		Enums_with_multiple_declarations_must_provide_an_initializer_for_the_first_enum_element: string;
		_0_overload_s: string;
		Variable_declaration_cannot_have_the_same_name_as_an_import_declaration: string;
		Signature_expected_0_type_arguments_got_1_instead: string;
		Property_0_defined_as_optional_in_type_1_but_is_required_in_type_2: string;
		Types_0_and_1_originating_in_inifinitely_expanding_type_reference_do_not_refer_to_same_named_type: string;
		Types_0_and_1_originating_in_inifinitely_expanding_type_reference_have_incompatible_type_arguments: string;
		Types_0_and_1_originating_in_inifinitely_expanding_type_reference_have_incompatible_type_arguments_NL_2: string;
		Types_of_property_0_of_types_1_and_2_are_not_identical: string;
		Types_of_string_indexer_of_types_0_and_1_are_not_identical: string;
		Types_of_number_indexer_of_types_0_and_1_are_not_identical: string;
		Type_of_number_indexer_in_type_0_is_not_a_subtype_of_string_indexer_type_in_type_1_NL_2: string;
		Type_of_property_0_in_type_1_is_not_a_subtype_of_string_indexer_type_in_type_2_NL_3: string;
		Type_of_property_0_in_type_1_is_not_a_subtype_of_number_indexer_type_in_type_2_NL_3: string;
		Current_host_does_not_support_0_option: string;
		ECMAScript_target_version_0_not_supported_Specify_a_valid_target_version_1_default_or_2: string;
		Module_code_generation_0_not_supported: string;
		Could_not_find_file_0: string;
		A_file_cannot_have_a_reference_to_itself: string;
		Cannot_resolve_referenced_file_0: string;
		Cannot_find_the_common_subdirectory_path_for_the_input_files: string;
		Emit_Error_0: string;
		Cannot_read_file_0_1: string;
		Unsupported_file_encoding: string;
		Locale_must_be_of_the_form_language_or_language_territory_For_example_0_or_1: string;
		Unsupported_locale_0: string;
		Execution_Failed_NL: string;
		Invalid_call_to_up: string;
		Invalid_call_to_down: string;
		Base64_value_0_finished_with_a_continuation_bit: string;
		Unknown_option_0: string;
		Expected_0_arguments_to_message_got_1_instead: string;
		Expected_the_message_0_to_have_1_arguments_but_it_had_2: string;
		Could_not_delete_file_0: string;
		Could_not_create_directory_0: string;
		Error_while_executing_file_0: string;
		Cannot_compile_external_modules_unless_the_module_flag_is_provided: string;
		Option_mapRoot_cannot_be_specified_without_specifying_sourcemap_option: string;
		Option_sourceRoot_cannot_be_specified_without_specifying_sourcemap_option: string;
		Options_mapRoot_and_sourceRoot_cannot_be_specified_without_specifying_sourcemap_option: string;
		Option_0_specified_without_1: string;
		codepage_option_not_supported_on_current_platform: string;
		Concatenate_and_emit_output_to_single_file: string;
		Generates_corresponding_0_file: string;
		Specifies_the_location_where_debugger_should_locate_map_files_instead_of_generated_locations: string;
		Specifies_the_location_where_debugger_should_locate_TypeScript_files_instead_of_source_locations: string;
		Watch_input_files: string;
		Redirect_output_structure_to_the_directory: string;
		Do_not_emit_comments_to_output: string;
		Skip_resolution_and_preprocessing: string;
		Specify_ECMAScript_target_version_0_default_or_1: string;
		Specify_module_code_generation_0_or_1: string;
		Print_this_message: string;
		Print_the_compiler_s_version_0: string;
		Allow_use_of_deprecated_0_keyword_when_referencing_an_external_module: string;
		Specify_locale_for_errors_and_messages_For_example_0_or_1: string;
		Syntax_0: string;
		options: string;
		file1: string;
		Examples: string;
		Options: string;
		Insert_command_line_options_and_files_from_a_file: string;
		Version_0: string;
		Use_the_0_flag_to_see_options: string;
		NL_Recompiling_0: string;
		STRING: string;
		KIND: string;
		file2: string;
		VERSION: string;
		LOCATION: string;
		DIRECTORY: string;
		NUMBER: string;
		Specify_the_codepage_to_use_when_opening_source_files: string;
		This_version_of_the_Javascript_runtime_does_not_support_the_0_function: string;
		Unknown_rule: string;
		Invalid_line_number_0: string;
		Warn_on_expressions_and_declarations_with_an_implied_any_type: string;
		Variable_0_implicitly_has_an_any_type: string;
		Parameter_0_of_1_implicitly_has_an_any_type: string;
		Parameter_0_of_function_type_implicitly_has_an_any_type: string;
		Member_0_of_object_type_implicitly_has_an_any_type: string;
		new_expression_which_lacks_a_constructor_signature_implicitly_has_an_any_type: string;
		_0_which_lacks_return_type_annotation_implicitly_has_an_any_return_type: string;
		Function_expression_which_lacks_return_type_annotation_implicitly_has_an_any_return_type: string;
		Parameter_0_of_lambda_function_implicitly_has_an_any_type: string;
		Constructor_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type: string;
		Lambda_Function_which_lacks_return_type_annotation_implicitly_has_an_any_return_type: string;
		Array_Literal_implicitly_has_an_any_type_from_widening: string;
		_0_which_lacks_get_accessor_and_parameter_type_annotation_on_set_accessor_implicitly_has_an_any_type: string;
	};
	class ArrayUtilities {
		static isArray(value: any): boolean;
		static sequenceEquals<T>(array1: T[], array2: T[], equals: (v1: T, v2: T) => boolean): boolean;
		static contains<T>(array: T[], value: T): boolean;
		static groupBy(array: any[], func: (v: any) => string): any;
		static distinct<T>(array: T[], equalsFn?: (a: T, b: T) => boolean): T[];
		static min<T>(array: T[], func: (v: T) => number): number;
		static max<T>(array: T[], func: (v: T) => number): number;
		static last<T>(array: T[]): T;
		static lastOrDefault<T>(array: T[], predicate: (v: T, index: number) => boolean): T;
		static firstOrDefault<T>(array: T[], func: (v: T, index: number) => boolean): T;
		static first<T>(array: T[], func?: (v: T, index: number) => boolean): T;
		static sum<T>(array: T[], func: (v: T) => number): number;
		static select<T, S>(values: T[], func: (v: T) => S): S[];
		static where<T>(values: T[], func: (v: T) => boolean): T[];
		static any<T>(array: T[], func: (v: T) => boolean): boolean;
		static all<T>(array: T[], func: (v: T) => boolean): boolean;
		static binarySearch(array: number[], value: number): number;
		static createArray<T>(length: number, defaultValue: any): T[];
		static grow<T>(array: T[], length: number, defaultValue: T): void;
		static copy<T>(sourceArray: T[], sourceIndex: number, destinationArray: T[], destinationIndex: number, length: number): void;
		static indexOf<T>(array: T[], predicate: (v: T) => boolean): number;
	}
	interface IBitVector {
		valueAt(index: number): boolean;
		setValueAt(index: number, value: boolean): void;
		release(): void;
	}
	module BitVector {
		function getBitVector(allowUndefinedValues: boolean): IBitVector;
	}
	interface IBitMatrix {
		valueAt(x: number, y: number): boolean;
		setValueAt(x: number, y: number, value: boolean): void;
		release(): void;
	}
	module BitMatrix {
		function getBitMatrix(allowUndefinedValues: boolean): IBitMatrix;
	}
	enum Constants {
		Max31BitInteger = 1073741823,
		Min31BitInteger = -1073741824,
	}
	enum AssertionLevel {
		None = 0,
		Normal = 1,
		Aggressive = 2,
		VeryAggressive = 3,
	}
	class Debug {
		private static currentAssertionLevel;
		static shouldAssert(level: AssertionLevel): boolean;
		static assert(expression: any, message?: string, verboseDebugInfo?: () => string): void;
		static fail(message?: string): void;
	}
	var LocalizedDiagnosticMessages: any;
	class Diagnostic {
		private _fileName;
		private _lineMap;
		private _start;
		private _length;
		private _diagnosticKey;
		private _arguments;
		constructor(fileName: string, lineMap: LineMap, start: number, length: number, diagnosticKey: string, arguments?: any[]);
		public toJSON(key: any): any;
		public fileName(): string;
		public line(): number;
		public character(): number;
		public start(): number;
		public length(): number;
		public diagnosticKey(): string;
		public arguments(): any[];
		/**
		* Get the text of the message in the given language.
		*/
		public text(): string;
		/**
		* Get the text of the message including the error code in the given language.
		*/
		public message(): string;
		/**
		* If a derived class has additional information about other referenced symbols, it can
		* expose the locations of those symbols in a general way, so they can be reported along
		* with the error.
		*/
		public additionalLocations(): Location[];
		static equals(diagnostic1: Diagnostic, diagnostic2: Diagnostic): boolean;
		public info(): DiagnosticInfo;
	}
	function newLine(): string;
	function getLocalizedText(diagnosticKey: string, args: any[]): string;
	function getDiagnosticMessage(diagnosticKey: string, args: any[]): string;
	interface DiagnosticInfo {
		category: DiagnosticCategory;
		message: string;
		code: number;
	}
	class Errors {
		static argument(argument: string, message?: string): Error;
		static argumentOutOfRange(argument: string): Error;
		static argumentNull(argument: string): Error;
		static abstract(): Error;
		static notYetImplemented(): Error;
		static invalidOperation(message?: string): Error;
	}
	class Hash {
		private static FNV_BASE;
		private static FNV_PRIME;
		private static computeFnv1aCharArrayHashCode(text, start, len);
		static computeSimple31BitCharArrayHashCode(key: number[], start: number, len: number): number;
		static computeSimple31BitStringHashCode(key: string): number;
		static computeMurmur2StringHashCode(key: string, seed: number): number;
		private static primes;
		static getPrime(min: number): number;
		static expandPrime(oldSize: number): number;
		static combine(value: number, currentHash: number): number;
	}
	var nodeMakeDirectoryTime: number;
	var nodeCreateBufferTime: number;
	var nodeWriteFileSyncTime: number;
	enum ByteOrderMark {
		None = 0,
		Utf8 = 1,
		Utf16BigEndian = 2,
		Utf16LittleEndian = 3,
	}
	class FileInformation {
		public contents: string;
		public byteOrderMark: ByteOrderMark;
		constructor(contents: string, byteOrderMark: ByteOrderMark);
	}
	interface IEnvironment {
		supportsCodePage(): boolean;
		readFile(path: string, codepage: number): FileInformation;
		writeFile(path: string, contents: string, writeByteOrderMark: boolean): void;
		deleteFile(path: string): void;
		fileExists(path: string): boolean;
		directoryExists(path: string): boolean;
		listFiles(path: string, re?: RegExp, options?: {
			recursive?: boolean;
		}): string[];
		arguments: string[];
		standardOut: ITextWriter;
		currentDirectory(): string;
		newLine: string;
	}
	var Environment: IEnvironment;
	module IntegerUtilities {
		function integerDivide(numerator: number, denominator: number): number;
		function integerMultiplyLow32Bits(n1: number, n2: number): number;
		function integerMultiplyHigh32Bits(n1: number, n2: number): number;
		function isInteger(text: string): boolean;
		function isHexInteger(text: string): boolean;
	}
	interface Iterator<T> {
		moveNext(): boolean;
		current(): T;
	}
	interface ILineAndCharacter {
		line: number;
		character: number;
	}
	class LineMap {
		private _computeLineStarts;
		private length;
		static empty: LineMap;
		private _lineStarts;
		constructor(_computeLineStarts: () => number[], length: number);
		public toJSON(key: any): {
			lineStarts: number[];
			length: number;
		};
		public equals(other: LineMap): boolean;
		public lineStarts(): number[];
		public lineCount(): number;
		public getPosition(line: number, character: number): number;
		public getLineNumberFromPosition(position: number): number;
		public getLineStartPosition(lineNumber: number): number;
		public fillLineAndCharacterFromPosition(position: number, lineAndCharacter: ILineAndCharacter): void;
		public getLineAndCharacterFromPosition(position: number): LineAndCharacter;
	}
	class LineAndCharacter {
		private _line;
		private _character;
		/**
		* Initializes a new instance of a LinePosition with the given line and character. ArgumentOutOfRangeException if "line" or "character" is less than zero.
		* @param line The line of the line position. The first line in a file is defined as line 0 (zero based line numbering).
		* @param character The character position in the line.
		*/
		constructor(line: number, character: number);
		public line(): number;
		public character(): number;
	}
	class MathPrototype {
		static max(a: number, b: number): number;
		static min(a: number, b: number): number;
	}
	class StringUtilities {
		static isString(value: any): boolean;
		static fromCharCodeArray(array: number[]): string;
		static endsWith(string: string, value: string): boolean;
		static startsWith(string: string, value: string): boolean;
		static copyTo(source: string, sourceIndex: number, destination: number[], destinationIndex: number, count: number): void;
		static repeat(value: string, count: number): string;
		static stringEquals(val1: string, val2: string): boolean;
	}
	class Timer {
		public startTime: number;
		public time: number;
		public start(): void;
		public end(): void;
	}
	enum DiagnosticCategory {
		Warning = 0,
		Error = 1,
		Message = 2,
		NoPrefix = 3,
	}
	var diagnosticInformationMap: {
		"error TS{0}: {1}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"warning TS{0}: {1}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Unrecognized escape sequence.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Unexpected character {0}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Missing close quote character.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Identifier expected.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'{0}' keyword expected.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'{0}' expected.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Identifier expected; '{0}' is a keyword.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Automatic semicolon insertion not allowed.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Unexpected token; '{0}' expected.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Trailing separator not allowed.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'*/' expected.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'public' or 'private' modifier must precede 'static'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Unexpected token.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Catch clause parameter cannot have a type annotation.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Rest parameter must be last in list.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Parameter cannot have question mark and initializer.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Required parameter cannot follow optional parameter.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Index signatures cannot have rest parameters.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Index signature parameter cannot have accessibility modifiers.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Index signature parameter cannot have a question mark.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Index signature parameter cannot have an initializer.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Index signature must have a type annotation.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Index signature parameter must have a type annotation.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Index signature parameter type must be 'string' or 'number'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'extends' clause already seen.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'extends' clause must precede 'implements' clause.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Classes can only extend a single class.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'implements' clause already seen.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Accessibility modifier already seen.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'{0}' modifier must precede '{1}' modifier.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'{0}' modifier already seen.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'{0}' modifier cannot appear on a class element.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Interface declaration cannot have 'implements' clause.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'super' invocation cannot have type arguments.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Only ambient modules can use quoted names.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Statements are not allowed in ambient contexts.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Implementations are not allowed in ambient contexts.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'declare' modifier not allowed for code already in an ambient context.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Initializers are not allowed in ambient contexts.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Parameter property declarations can only be used in constructors.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Function implementation expected.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Constructor implementation expected.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Function overload name must be '{0}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'{0}' modifier cannot appear on a module element.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'declare' modifier cannot appear on an interface declaration.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'declare' modifier required for top level element.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Rest parameter cannot be optional.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Rest parameter cannot have an initializer.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'set' accessor must have one and only one parameter.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'set' accessor parameter cannot be optional.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'set' accessor parameter cannot have an initializer.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'set' accessor cannot have rest parameter.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'get' accessor cannot have parameters.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Modifiers cannot appear here.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Accessors are only available when targeting ECMAScript 5 and higher.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Class name cannot be '{0}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Interface name cannot be '{0}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Enum name cannot be '{0}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Module name cannot be '{0}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Enum member must have initializer.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Export assignment cannot be used in internal modules.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Export assignment not allowed in module with exported element.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Module cannot have multiple export assignments.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Ambient enum elements can only have integer literal initializers.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"module, class, interface, enum, import or statement": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"constructor, function, accessor or variable": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"statement": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"case or default clause": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"identifier": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"call, construct, index, property or function signature": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"expression": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"type name": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"property or accessor": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"parameter": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"type": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"type parameter": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'declare' modifier not allowed on import declaration.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Function overload must be static.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Function overload must not be static.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Parameter property declarations cannot be used in an ambient context.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Parameter property declarations cannot be used in a constructor overload.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Invalid 'reference' directive syntax.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Octal literals are not available when targeting ECMAScript 5 and higher.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Accessors are not allowed in ambient contexts.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'{0}' modifier cannot appear on a constructor declaration.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'{0}' modifier cannot appear on a parameter.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Duplicate identifier '{0}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"The name '{0}' does not exist in the current scope.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"The name '{0}' does not refer to a value.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'super' can only be used inside a class instance method.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"The left-hand side of an assignment expression must be a variable, property or indexer.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Value of type '{0}' is not callable. Did you mean to include 'new'?": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Value of type '{0}' is not callable.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Value of type '{0}' is not newable.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Value of type '{0}' is not indexable by type '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Operator '{0}' cannot be applied to types '{1}' and '{2}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Operator '{0}' cannot be applied to types '{1}' and '{2}': {3}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Cannot convert '{0}' to '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Cannot convert '{0}' to '{1}':{NL}{2}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Expected var, class, interface, or module.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Operator '{0}' cannot be applied to type '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Getter '{0}' already declared.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Setter '{0}' already declared.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Exported class '{0}' extends private class '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Exported class '{0}' implements private interface '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Exported interface '{0}' extends private interface '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Exported class '{0}' extends class from inaccessible module {1}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Exported class '{0}' implements interface from inaccessible module {1}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Exported interface '{0}' extends interface from inaccessible module {1}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Public static property '{0}' of exported class has or is using private type '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Public property '{0}' of exported class has or is using private type '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Property '{0}' of exported interface has or is using private type '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Exported variable '{0}' has or is using private type '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Public static property '{0}' of exported class is using inaccessible module {1}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Public property '{0}' of exported class is using inaccessible module {1}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Property '{0}' of exported interface is using inaccessible module {1}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Exported variable '{0}' is using inaccessible module {1}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Parameter '{0}' of constructor from exported class has or is using private type '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Parameter '{0}' of public static property setter from exported class has or is using private type '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Parameter '{0}' of public property setter from exported class has or is using private type '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Parameter '{0}' of constructor signature from exported interface has or is using private type '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Parameter '{0}' of call signature from exported interface has or is using private type '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Parameter '{0}' of public static method from exported class has or is using private type '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Parameter '{0}' of public method from exported class has or is using private type '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Parameter '{0}' of method from exported interface has or is using private type '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Parameter '{0}' of exported function has or is using private type '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Parameter '{0}' of constructor from exported class is using inaccessible module {1}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Parameter '{0}' of public static property setter from exported class is using inaccessible module {1}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Parameter '{0}' of public property setter from exported class is using inaccessible module {1}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Parameter '{0}' of constructor signature from exported interface is using inaccessible module {1}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Parameter '{0}' of call signature from exported interface is using inaccessible module {1}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Parameter '{0}' of public static method from exported class is using inaccessible module {1}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Parameter '{0}' of public method from exported class is using inaccessible module {1}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Parameter '{0}' of method from exported interface is using inaccessible module {1}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Parameter '{0}' of exported function is using inaccessible module {1}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Return type of public static property getter from exported class has or is using private type '{0}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Return type of public property getter from exported class has or is using private type '{0}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Return type of constructor signature from exported interface has or is using private type '{0}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Return type of call signature from exported interface has or is using private type '{0}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Return type of index signature from exported interface has or is using private type '{0}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Return type of public static method from exported class has or is using private type '{0}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Return type of public method from exported class has or is using private type '{0}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Return type of method from exported interface has or is using private type '{0}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Return type of exported function has or is using private type '{0}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Return type of public static property getter from exported class is using inaccessible module {0}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Return type of public property getter from exported class is using inaccessible module {0}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Return type of constructor signature from exported interface is using inaccessible module {0}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Return type of call signature from exported interface is using inaccessible module {0}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Return type of index signature from exported interface is using inaccessible module {0}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Return type of public static method from exported class is using inaccessible module {0}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Return type of public method from exported class is using inaccessible module {0}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Return type of method from exported interface is using inaccessible module {0}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Return type of exported function is using inaccessible module {0}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'new T[]' cannot be used to create an array. Use 'new Array<T>()' instead.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"A parameter list must follow a generic type argument list. '(' expected.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Multiple constructor implementations are not allowed.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Unable to resolve external module '{0}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Module cannot be aliased to a non-module type.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"A class may only extend another class.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"A class may only implement another class or interface.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"An interface may only extend another class or interface.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Unable to resolve type.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Unable to resolve type of '{0}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Unable to resolve type parameter constraint.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Type parameter constraint cannot be a primitive type.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Supplied parameters do not match any signature of call target.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Supplied parameters do not match any signature of call target:{NL}{0}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Invalid 'new' expression.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Call signatures used in a 'new' expression must have a 'void' return type.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Could not select overload for 'new' expression.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Type '{0}' does not satisfy the constraint '{1}' for type parameter '{2}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Could not select overload for 'call' expression.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Cannot invoke an expression whose type lacks a call signature.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Calls to 'super' are only valid inside a class.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Generic type '{0}' requires {1} type argument(s).": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Type of array literal cannot be determined. Best common type could not be found for array elements.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Could not find enclosing symbol for dotted name '{0}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"The property '{0}' does not exist on value of type '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Could not find symbol '{0}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'get' and 'set' accessor must have the same type.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'this' cannot be referenced in current location.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Static methods cannot reference class type parameters.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Class '{0}' is recursively referenced as a base type of itself.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Interface '{0}' is recursively referenced as a base type of itself.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'super' property access is permitted only in a constructor, member function, or member accessor of a derived class.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'super' cannot be referenced in non-derived classes.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"A 'super' call must be the first statement in the constructor when a class contains initialized properties or has parameter properties.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Constructors for derived classes must contain a 'super' call.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Super calls are not permitted outside constructors or in local functions inside constructors.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'{0}.{1}' is inaccessible.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'this' cannot be referenced within module bodies.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Invalid '+' expression - types not known to support the addition operator.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"The right-hand side of an arithmetic operation must be of type 'any', 'number' or an enum type.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"The left-hand side of an arithmetic operation must be of type 'any', 'number' or an enum type.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"The type of a unary arithmetic operation operand must be of type 'any', 'number' or an enum type.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Variable declarations of a 'for' statement cannot use a type annotation.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Variable declarations of a 'for' statement must be of types 'string' or 'any'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"The right-hand side of a 'for...in' statement must be of type 'any', an object type or a type parameter.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"The left-hand side of an 'in' expression must be of types 'any', 'string' or 'number'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"The right-hand side of an 'in' expression must be of type 'any', an object type or a type parameter.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"The left-hand side of an 'instanceof' expression must be of type 'any', an object type or a type parameter.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"The right-hand side of an 'instanceof' expression must be of type 'any' or a subtype of the 'Function' interface type.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Setters cannot return a value.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Tried to query type of uninitialized module '{0}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Tried to set variable type to uninitialized module type '{0}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Function '{0}' declared a non-void return type, but has no return expression.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Getters must return a value.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Getter and setter accessors do not agree in visibility.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Invalid left-hand side of assignment expression.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Function declared a non-void return type, but has no return expression.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Cannot resolve return type reference.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Constructors cannot have a return type of 'void'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Subsequent variable declarations must have the same type.  Variable '{0}' must be of type '{1}', but here has type '{2}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"All symbols within a with block will be resolved to 'any'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Import declarations in an internal module cannot reference an external module.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Class {0} declares interface {1} but does not implement it:{NL}{2}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Class {0} declares class {1} as an interface but does not implement it:{NL}{2}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"The operand of an increment or decrement operator must be a variable, property or indexer.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'this' cannot be referenced in static initializers in a class body.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Class '{0}' cannot extend class '{1}':{NL}{2}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Interface '{0}' cannot extend class '{1}':{NL}{2}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Interface '{0}' cannot extend interface '{1}':{NL}{2}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Duplicate overload signature for '{0}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Duplicate constructor overload signature.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Duplicate overload call signature.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Duplicate overload construct signature.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Overload signature is not compatible with function definition.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Overload signature is not compatible with function definition:{NL}{0}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Overload signatures must all be public or private.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Overload signatures must all be exported or not exported.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Overload signatures must all be ambient or non-ambient.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Overload signatures must all be optional or required.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Specialized overload signature is not subtype of any non-specialized signature.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'this' cannot be referenced in constructor arguments.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Instance member cannot be accessed off a class.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Untyped function calls may not accept type arguments.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Non-generic functions may not accept type arguments.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"A generic type may not reference itself with a wrapped form of its own type parameters.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Rest parameters must be array types.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Overload signature implementation cannot use specialized type.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Export assignments may only be used at the top-level of external modules.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Export assignments may only be made with variables, functions, classes, interfaces, enums and internal modules.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Only public methods of the base class are accessible via the 'super' keyword.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Numeric indexer type '{0}' must be a subtype of string indexer type '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Numeric indexer type '{0}' must be a subtype of string indexer type '{1}':{NL}{2}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"All numerically named properties must be subtypes of numeric indexer type '{0}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"All numerically named properties must be subtypes of numeric indexer type '{0}':{NL}{1}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"All named properties must be subtypes of string indexer type '{0}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"All named properties must be subtypes of string indexer type '{0}':{NL}{1}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Generic type references must include all type arguments.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Default arguments are not allowed in an overload parameter.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Overloads cannot differ only by return type.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Function expression declared a non-void return type, but has no return expression.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Import declaration referencing identifier from internal module can only be made with variables, functions, classes, interfaces, enums and internal modules.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Could not find symbol '{0}' in module '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Unable to resolve module reference '{0}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Could not find module '{0}' in module '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Exported import declaration '{0}' is assigned value with type that has or is using private type '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Exported import declaration '{0}' is assigned value with type that is using inaccessible module '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Exported import declaration '{0}' is assigned type that has or is using private type '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Exported import declaration '{0}' is assigned type that is using inaccessible module '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Exported import declaration '{0}' is assigned container that is or is using inaccessible module '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Type reference '{0}' in extends clause does not reference constructor function for '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Internal module reference '{0}' in import declaration does not reference module instance for '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Module '{0}' cannot merge with previous declaration of '{1}' in a different file '{2}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Interface '{0}' cannot simultaneously extend types '{1}' and '{2}':{NL}{3}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Initializer of parameter '{0}' cannot reference identifier '{1}' declared after it.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Ambient external module declaration cannot be reopened.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"All declarations of merged declaration '{0}' must be exported or not exported.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'super' cannot be referenced in constructor arguments.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Return type of constructor signature must be assignable to the instance type of the class.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Ambient external module declaration must be defined in global context.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Ambient external module declaration cannot specify relative module name.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Import declaration in an ambient external module declaration cannot reference external module through relative external module name.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Could not find the best common type of types of all return statement expressions.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Import declaration cannot refer to external module reference when --noResolve option is set.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Duplicate identifier '_this'. Compiler uses variable declaration '_this' to capture 'this' reference.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'continue' statement can only be used within an enclosing iteration statement.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'break' statement can only be used within an enclosing iteration or switch statement.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Jump target not found.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Jump target cannot cross function boundary.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Duplicate identifier '_super'. Compiler uses '_super' to capture base class reference.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Expression resolves to variable declaration '_this' that compiler uses to capture 'this' reference.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Expression resolves to '_super' that compiler uses to capture base class reference.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"TypeParameter '{0}' of constructor signature from exported interface has or is using private type '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"TypeParameter '{0}' of call signature from exported interface has or is using private type '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"TypeParameter '{0}' of public static method from exported class has or is using private type '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"TypeParameter '{0}' of public method from exported class has or is using private type '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"TypeParameter '{0}' of method from exported interface has or is using private type '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"TypeParameter '{0}' of exported function has or is using private type '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"TypeParameter '{0}' of constructor signature from exported interface is using inaccessible module {1}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"TypeParameter '{0}' of call signature from exported interface is using inaccessible module {1}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"TypeParameter '{0}' of public static method from exported class is using inaccessible module {1}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"TypeParameter '{0}' of public method from exported class is using inaccessible module {1}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"TypeParameter '{0}' of method from exported interface is using inaccessible module {1}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"TypeParameter '{0}' of exported function is using inaccessible module {1}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"TypeParameter '{0}' of exported class has or is using private type '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"TypeParameter '{0}' of exported interface has or is using private type '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"TypeParameter '{0}' of exported class is using inaccessible module {1}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"TypeParameter '{0}' of exported interface is using inaccessible module {1}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Duplicate identifier '_i'. Compiler uses '_i' to initialize rest parameter.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Type of conditional '{0}' must be identical to '{1}' or '{2}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Type of conditional '{0}' must be identical to '{1}', '{2}' or '{3}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Duplicate identifier '{0}'. Compiler reserves name '{1}' in top level scope of an external module.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Type '{0}' is missing property '{1}' from type '{2}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Types of property '{0}' of types '{1}' and '{2}' are incompatible.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Types of property '{0}' of types '{1}' and '{2}' are incompatible:{NL}{3}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Property '{0}' defined as private in type '{1}' is defined as public in type '{2}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Property '{0}' defined as public in type '{1}' is defined as private in type '{2}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Types '{0}' and '{1}' define property '{2}' as private.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Call signatures of types '{0}' and '{1}' are incompatible.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Call signatures of types '{0}' and '{1}' are incompatible:{NL}{2}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Type '{0}' requires a call signature, but type '{1}' lacks one.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Construct signatures of types '{0}' and '{1}' are incompatible.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Construct signatures of types '{0}' and '{1}' are incompatible:{NL}{2}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Type '{0}' requires a construct signature, but type '{1}' lacks one.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Index signatures of types '{0}' and '{1}' are incompatible.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Index signatures of types '{0}' and '{1}' are incompatible:{NL}{2}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Call signature expects {0} or fewer parameters.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Could not apply type '{0}' to argument {1} which is of type '{2}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Class '{0}' defines instance member accessor '{1}', but extended class '{2}' defines it as instance member function.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Class '{0}' defines instance member property '{1}', but extended class '{2}' defines it as instance member function.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Class '{0}' defines instance member function '{1}', but extended class '{2}' defines it as instance member accessor.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Class '{0}' defines instance member function '{1}', but extended class '{2}' defines it as instance member property.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Types of static property '{0}' of class '{1}' and class '{2}' are incompatible.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Types of static property '{0}' of class '{1}' and class '{2}' are incompatible:{NL}{3}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Type reference cannot refer to container '{0}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Type reference must refer to type.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Enums with multiple declarations must provide an initializer for the first enum element.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		" (+ {0} overload(s))": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Variable declaration cannot have the same name as an import declaration.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Signature expected {0} type arguments, got {1} instead.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Property '{0}' defined as optional in type '{1}', but is required in type '{2}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Types '{0}' and '{1}' originating in inifinitely expanding type reference do not refer to same named type.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Types '{0}' and '{1}' originating in inifinitely expanding type reference have incompatible type arguments.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Types '{0}' and '{1}' originating in inifinitely expanding type reference have incompatible type arguments:{NL}{2}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Types of property '{0}' of types '{1}' and '{2}' are not identical.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Types of string indexer of types '{0}' and '{1}' are not identical.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Types of number indexer of types '{0}' and '{1}' are not identical.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Type of number indexer in type '{0}' is not a subtype of string indexer type in type '{1}'.{NL}{2}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Type of property '{0}' in type '{1}' is not a subtype of string indexer type in type '{2}'.{NL}{3}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Type of property '{0}' in type '{1}' is not a subtype of number indexer type in type '{2}'.{NL}{3}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Current host does not support '{0}' option.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"ECMAScript target version '{0}' not supported.  Specify a valid target version: '{1}' (default), or '{2}'": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Module code generation '{0}' not supported.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Could not find file: '{0}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"A file cannot have a reference to itself.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Cannot resolve referenced file: '{0}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Cannot find the common subdirectory path for the input files.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Emit Error: {0}.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Cannot read file '{0}': {1}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Unsupported file encoding.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Locale must be of the form <language> or <language>-<territory>. For example '{0}' or '{1}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Unsupported locale: '{0}'.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Execution Failed.{NL}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Invalid call to 'up'": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Invalid call to 'down'": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Base64 value '{0}' finished with a continuation bit.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Unknown option '{0}'": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Expected {0} arguments to message, got {1} instead.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Expected the message '{0}' to have {1} arguments, but it had {2}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Could not delete file '{0}'": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Could not create directory '{0}'": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Error while executing file '{0}': ": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Cannot compile external modules unless the '--module' flag is provided.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Option mapRoot cannot be specified without specifying sourcemap option.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Option sourceRoot cannot be specified without specifying sourcemap option.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Options mapRoot and sourceRoot cannot be specified without specifying sourcemap option.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Option '{0}' specified without '{1}'": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'codepage' option not supported on current platform.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Concatenate and emit output to single file.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Generates corresponding {0} file.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Specifies the location where debugger should locate map files instead of generated locations.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Specifies the location where debugger should locate TypeScript files instead of source locations.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Watch input files.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Redirect output structure to the directory.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Do not emit comments to output.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Skip resolution and preprocessing.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Specify ECMAScript target version: '{0}' (default), or '{1}'": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Specify module code generation: '{0}' or '{1}'": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Print this message.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Print the compiler's version: {0}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Allow use of deprecated '{0}' keyword when referencing an external module.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Specify locale for errors and messages. For example '{0}' or '{1}'": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Syntax:   {0}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"options": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"file1": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Examples:": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Options:": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Insert command line options and files from a file.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Version {0}": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Use the '{0}' flag to see options.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"{NL}Recompiling ({0}):": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"STRING": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"KIND": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"file2": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"VERSION": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"LOCATION": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"DIRECTORY": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"NUMBER": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Specify the codepage to use when opening source files.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"This version of the Javascript runtime does not support the '{0}' function.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Unknown rule.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Invalid line number ({0})": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Warn on expressions and declarations with an implied 'any' type.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Variable '{0}' implicitly has an 'any' type.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Parameter '{0}' of '{1}' implicitly has an 'any' type.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Parameter '{0}' of function type implicitly has an 'any' type.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Member '{0}' of object type implicitly has an 'any' type.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'new' expression, which lacks a constructor signature, implicitly has an 'any' type.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'{0}', which lacks return-type annotation, implicitly has an 'any' return type.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Function expression, which lacks return-type annotation, implicitly has an 'any' return type.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Parameter '{0}' of lambda function implicitly has an 'any' type.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Constructor signature, which lacks return-type annotation, implicitly has an 'any' return type.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Lambda Function, which lacks return-type annotation, implicitly has an 'any' return type.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"Array Literal implicitly has an 'any' type from widening.": {
			"code": number;
			"category": DiagnosticCategory;
		};
		"'{0}', which lacks 'get' accessor and parameter type annotation on 'set' accessor, implicitly has an 'any' type.": {
			"code": number;
			"category": DiagnosticCategory;
		};
	};
	enum CharacterCodes {
		nullCharacter = 0,
		maxAsciiCharacter = 127,
		lineFeed = 10,
		carriageReturn = 13,
		lineSeparator = 8232,
		paragraphSeparator = 8233,
		nextLine = 133,
		space = 32,
		nonBreakingSpace = 160,
		enQuad = 8192,
		emQuad = 8193,
		enSpace = 8194,
		emSpace = 8195,
		threePerEmSpace = 8196,
		fourPerEmSpace = 8197,
		sixPerEmSpace = 8198,
		figureSpace = 8199,
		punctuationSpace = 8200,
		thinSpace = 8201,
		hairSpace = 8202,
		zeroWidthSpace = 8203,
		narrowNoBreakSpace = 8239,
		ideographicSpace = 12288,
		_ = 95,
		$ = 36,
		_0 = 48,
		_7 = 55,
		_9 = 57,
		a = 97,
		b = 98,
		c = 99,
		d = 100,
		e = 101,
		f = 102,
		g = 103,
		h = 104,
		i = 105,
		k = 107,
		l = 108,
		m = 109,
		n = 110,
		o = 111,
		p = 112,
		q = 113,
		r = 114,
		s = 115,
		t = 116,
		u = 117,
		v = 118,
		w = 119,
		x = 120,
		y = 121,
		z = 122,
		A = 65,
		E = 69,
		F = 70,
		X = 88,
		Z = 90,
		ampersand = 38,
		asterisk = 42,
		at = 64,
		backslash = 92,
		bar = 124,
		caret = 94,
		closeBrace = 125,
		closeBracket = 93,
		closeParen = 41,
		colon = 58,
		comma = 44,
		dot = 46,
		doubleQuote = 34,
		equals = 61,
		exclamation = 33,
		greaterThan = 62,
		lessThan = 60,
		minus = 45,
		openBrace = 123,
		openBracket = 91,
		openParen = 40,
		percent = 37,
		plus = 43,
		question = 63,
		semicolon = 59,
		singleQuote = 39,
		slash = 47,
		tilde = 126,
		backspace = 8,
		formFeed = 12,
		byteOrderMark = 65279,
		tab = 9,
		verticalTab = 11,
	}
	interface IScriptSnapshot {
		getText(start: number, end: number): string;
		getLength(): number;
		getLineStartPositions(): number[];
		getTextChangeRangeSinceVersion(scriptVersion: number): TextChangeRange;
	}
	module ScriptSnapshot {
		function fromString(text: string): IScriptSnapshot;
	}
	/**
	* Represents an immutable snapshot of text.
	*/
	interface ISimpleText {
		/**
		* Total number of characters in the text source.
		*/
		length(): number;
		/**
		* Copy the count contents of IText starting from sourceIndex to destination starting at
		* destinationIndex.
		*/
		copyTo(sourceIndex: number, destination: number[], destinationIndex: number, count: number): void;
		substr(start: number, length: number, intern: boolean): string;
		/**
		* Gets the a new IText that corresponds to the contents of this IText for the given span.
		*/
		subText(span: TextSpan): ISimpleText;
		charCodeAt(index: number): number;
		lineMap(): LineMap;
	}
	/**
	* Represents an immutable snapshot of text.
	*/
	interface IText extends ISimpleText {
		/**
		* Total number of lines in the text.
		*/
		lineCount(): number;
		/**
		* Returns the collection of line information for the IText instance.
		*/
		lines(): ITextLine[];
		/**
		* Return the char at position in the IText.
		*/
		charCodeAt(position: number): number;
		/**
		* Gets the line corresponding to the provided line number.
		*/
		getLineFromLineNumber(lineNumber: number): ITextLine;
		/**
		* Gets the line which encompasses the provided position.
		*/
		getLineFromPosition(position: number): ITextLine;
		/**
		* Gets the number of the line that contains the character at the specified position.
		*/
		getLineNumberFromPosition(position: number): number;
		/**
		* Gets a line number, and position within that line, for the character at the
		* specified position
		*/
		getLinePosition(position: number): LineAndCharacter;
		/**
		* Returns a string representation of the contents of this IText within the given span.
		*/
		toString(span?: TextSpan): string;
	}
	/**
	* Immutable representation of a line in an IText instance.
	*/
	interface ITextLine {
		/**
		* Start of the line.
		*/
		start(): number;
		/**
		* End of the line not including the line break.
		*/
		end(): number;
		/**
		* End of the line including the line break.
		*/
		endIncludingLineBreak(): number;
		/**
		* Extent of the line not including the line break.
		*/
		extent(): TextSpan;
		/**
		* Extent of the line including the line break.
		*/
		extentIncludingLineBreak(): TextSpan;
		/**
		* Gets the text of the line excluding the line break.
		*/
		toString(): string;
		/**
		* Gets the line number for this line.
		*/
		lineNumber(): number;
	}
	module LineMap1 {
		function fromSimpleText(text: ISimpleText): LineMap;
		function fromScriptSnapshot(scriptSnapshot: IScriptSnapshot): LineMap;
		function fromString(text: string): LineMap;
	}
	class TextSpan {
		private _start;
		private _length;
		/**
		* Creates a TextSpan instance beginning with the position Start and having the Length
		* specified with length.
		*/
		constructor(start: number, length: number);
		public start(): number;
		public length(): number;
		public end(): number;
		public isEmpty(): boolean;
		/**
		* Determines whether the position lies within the span. Returns true if the position is greater than or equal to Start and strictly less
		* than End, otherwise false.
		* @param position The position to check.
		*/
		public containsPosition(position: number): boolean;
		/**
		* Determines whether span falls completely within this span. Returns true if the specified span falls completely within this span, otherwise false.
		* @param span The span to check.
		*/
		public containsTextSpan(span: TextSpan): boolean;
		/**
		* Determines whether the given span overlaps this span. Two spans are considered to overlap
		* if they have positions in common and neither is empty. Empty spans do not overlap with any
		* other span. Returns true if the spans overlap, false otherwise.
		* @param span The span to check.
		*/
		public overlapsWith(span: TextSpan): boolean;
		/**
		* Returns the overlap with the given span, or null if there is no overlap.
		* @param span The span to check.
		*/
		public overlap(span: TextSpan): TextSpan;
		/**
		* Determines whether span intersects this span. Two spans are considered to
		* intersect if they have positions in common or the end of one span
		* coincides with the start of the other span. Returns true if the spans intersect, false otherwise.
		* @param The span to check.
		*/
		public intersectsWithTextSpan(span: TextSpan): boolean;
		public intersectsWith(start: number, length: number): boolean;
		/**
		* Determines whether the given position intersects this span.
		* A position is considered to intersect if it is between the start and
		* end positions (inclusive) of this span. Returns true if the position intersects, false otherwise.
		* @param position The position to check.
		*/
		public intersectsWithPosition(position: number): boolean;
		/**
		* Returns the intersection with the given span, or null if there is no intersection.
		* @param span The span to check.
		*/
		public intersection(span: TextSpan): TextSpan;
		/**
		* Creates a new TextSpan from the given start and end positions
		* as opposed to a position and length.
		*/
		static fromBounds(start: number, end: number): TextSpan;
	}
	class TextChangeRange {
		static unchanged: TextChangeRange;
		private _span;
		private _newLength;
		/**
		* Initializes a new instance of TextChangeRange.
		*/
		constructor(span: TextSpan, newLength: number);
		/**
		* The span of text before the edit which is being changed
		*/
		public span(): TextSpan;
		/**
		* Width of the span after the edit.  A 0 here would represent a delete
		*/
		public newLength(): number;
		public newSpan(): TextSpan;
		public isUnchanged(): boolean;
		/**
		* Called to merge all the changes that occurred between one version of a script snapshot to
		* the next into a single change.  i.e. say a user did a box selection and made an edit.  That
		* will show up as N text change ranges between version V of a script and version V+1.  This
		* function collapses those N changes into a single change range valid between V and V+1.
		*/
		static collapseChangesFromSingleVersion(changes: TextChangeRange[]): TextChangeRange;
		/**
		* Called to merge all the changes that occurred across several versions of a script snapshot
		* into a single change.  i.e. if a user keeps making successive edits to a script we will
		* have a text change from V1 to V2, V2 to V3, ..., Vn.
		*
		* This function will then merge those changes into a single change range valid between V1 and
		* Vn.
		*/
		static collapseChangesAcrossMultipleVersions(changes: TextChangeRange[]): TextChangeRange;
	}
	class CharacterInfo {
		static isDecimalDigit(c: number): boolean;
		static isOctalDigit(c: number): boolean;
		static isHexDigit(c: number): boolean;
		static hexValue(c: number): number;
		static isWhitespace(ch: number): boolean;
		static isLineTerminator(ch: number): boolean;
	}
	enum SyntaxConstants {
		TriviaNewLineMask = 1,
		TriviaCommentMask = 2,
		TriviaFullWidthShift = 2,
		NodeDataComputed = 1,
		NodeIncrementallyUnusableMask = 2,
		NodeParsedInStrictModeMask = 4,
		NodeFullWidthShift = 3,
		IsVariableWidthKeyword,
	}
	enum LanguageVersion {
		EcmaScript3 = 0,
		EcmaScript5 = 1,
	}
	class ParseOptions {
		private _languageVersion;
		private _allowAutomaticSemicolonInsertion;
		constructor(languageVersion: LanguageVersion, allowAutomaticSemicolonInsertion: boolean);
		public toJSON(key: any): {
			allowAutomaticSemicolonInsertion: boolean;
		};
		public languageVersion(): LanguageVersion;
		public allowAutomaticSemicolonInsertion(): boolean;
	}
	class PositionedElement {
		private _parent;
		private _element;
		private _fullStart;
		constructor(parent: PositionedElement, element: ISyntaxElement, fullStart: number);
		static create(parent: PositionedElement, element: ISyntaxElement, fullStart: number): PositionedElement;
		public parent(): PositionedElement;
		public parentElement(): ISyntaxElement;
		public element(): ISyntaxElement;
		public kind(): SyntaxKind;
		public childIndex(child: ISyntaxElement): number;
		public childCount(): number;
		public childAt(index: number): PositionedElement;
		public childStart(child: ISyntaxElement): number;
		public childEnd(child: ISyntaxElement): number;
		public childStartAt(index: number): number;
		public childEndAt(index: number): number;
		public getPositionedChild(child: ISyntaxElement): PositionedElement;
		public fullStart(): number;
		public fullEnd(): number;
		public fullWidth(): number;
		public start(): number;
		public end(): number;
		public root(): PositionedNode;
		public containingNode(): PositionedNode;
	}
	class PositionedNodeOrToken extends PositionedElement {
		constructor(parent: PositionedElement, nodeOrToken: ISyntaxNodeOrToken, fullStart: number);
		public nodeOrToken(): ISyntaxNodeOrToken;
	}
	class PositionedNode extends PositionedNodeOrToken {
		constructor(parent: PositionedElement, node: SyntaxNode, fullStart: number);
		public node(): SyntaxNode;
	}
	class PositionedToken extends PositionedNodeOrToken {
		constructor(parent: PositionedElement, token: ISyntaxToken, fullStart: number);
		public token(): ISyntaxToken;
		public previousToken(includeSkippedTokens?: boolean): PositionedToken;
		public nextToken(includeSkippedTokens?: boolean): PositionedToken;
	}
	class PositionedList extends PositionedElement {
		constructor(parent: PositionedElement, list: ISyntaxList, fullStart: number);
		public list(): ISyntaxList;
	}
	class PositionedSeparatedList extends PositionedElement {
		constructor(parent: PositionedElement, list: ISeparatedSyntaxList, fullStart: number);
		public list(): ISeparatedSyntaxList;
	}
	class PositionedSkippedToken extends PositionedToken {
		private _parentToken;
		constructor(parentToken: PositionedToken, token: ISyntaxToken, fullStart: number);
		public parentToken(): PositionedToken;
		public previousToken(includeSkippedTokens?: boolean): PositionedToken;
		public nextToken(includeSkippedTokens?: boolean): PositionedToken;
	}
	enum SyntaxKind {
		None = 0,
		List = 1,
		SeparatedList = 2,
		TriviaList = 3,
		WhitespaceTrivia = 4,
		NewLineTrivia = 5,
		MultiLineCommentTrivia = 6,
		SingleLineCommentTrivia = 7,
		SkippedTokenTrivia = 8,
		ErrorToken = 9,
		EndOfFileToken = 10,
		IdentifierName = 11,
		RegularExpressionLiteral = 12,
		NumericLiteral = 13,
		StringLiteral = 14,
		BreakKeyword = 15,
		CaseKeyword = 16,
		CatchKeyword = 17,
		ContinueKeyword = 18,
		DebuggerKeyword = 19,
		DefaultKeyword = 20,
		DeleteKeyword = 21,
		DoKeyword = 22,
		ElseKeyword = 23,
		FalseKeyword = 24,
		FinallyKeyword = 25,
		ForKeyword = 26,
		FunctionKeyword = 27,
		IfKeyword = 28,
		InKeyword = 29,
		InstanceOfKeyword = 30,
		NewKeyword = 31,
		NullKeyword = 32,
		ReturnKeyword = 33,
		SwitchKeyword = 34,
		ThisKeyword = 35,
		ThrowKeyword = 36,
		TrueKeyword = 37,
		TryKeyword = 38,
		TypeOfKeyword = 39,
		VarKeyword = 40,
		VoidKeyword = 41,
		WhileKeyword = 42,
		WithKeyword = 43,
		ClassKeyword = 44,
		ConstKeyword = 45,
		EnumKeyword = 46,
		ExportKeyword = 47,
		ExtendsKeyword = 48,
		ImportKeyword = 49,
		SuperKeyword = 50,
		ImplementsKeyword = 51,
		InterfaceKeyword = 52,
		LetKeyword = 53,
		PackageKeyword = 54,
		PrivateKeyword = 55,
		ProtectedKeyword = 56,
		PublicKeyword = 57,
		StaticKeyword = 58,
		YieldKeyword = 59,
		AnyKeyword = 60,
		BooleanKeyword = 61,
		ConstructorKeyword = 62,
		DeclareKeyword = 63,
		GetKeyword = 64,
		ModuleKeyword = 65,
		RequireKeyword = 66,
		NumberKeyword = 67,
		SetKeyword = 68,
		StringKeyword = 69,
		OpenBraceToken = 70,
		CloseBraceToken = 71,
		OpenParenToken = 72,
		CloseParenToken = 73,
		OpenBracketToken = 74,
		CloseBracketToken = 75,
		DotToken = 76,
		DotDotDotToken = 77,
		SemicolonToken = 78,
		CommaToken = 79,
		LessThanToken = 80,
		GreaterThanToken = 81,
		LessThanEqualsToken = 82,
		GreaterThanEqualsToken = 83,
		EqualsEqualsToken = 84,
		EqualsGreaterThanToken = 85,
		ExclamationEqualsToken = 86,
		EqualsEqualsEqualsToken = 87,
		ExclamationEqualsEqualsToken = 88,
		PlusToken = 89,
		MinusToken = 90,
		AsteriskToken = 91,
		PercentToken = 92,
		PlusPlusToken = 93,
		MinusMinusToken = 94,
		LessThanLessThanToken = 95,
		GreaterThanGreaterThanToken = 96,
		GreaterThanGreaterThanGreaterThanToken = 97,
		AmpersandToken = 98,
		BarToken = 99,
		CaretToken = 100,
		ExclamationToken = 101,
		TildeToken = 102,
		AmpersandAmpersandToken = 103,
		BarBarToken = 104,
		QuestionToken = 105,
		ColonToken = 106,
		EqualsToken = 107,
		PlusEqualsToken = 108,
		MinusEqualsToken = 109,
		AsteriskEqualsToken = 110,
		PercentEqualsToken = 111,
		LessThanLessThanEqualsToken = 112,
		GreaterThanGreaterThanEqualsToken = 113,
		GreaterThanGreaterThanGreaterThanEqualsToken = 114,
		AmpersandEqualsToken = 115,
		BarEqualsToken = 116,
		CaretEqualsToken = 117,
		SlashToken = 118,
		SlashEqualsToken = 119,
		SourceUnit = 120,
		QualifiedName = 121,
		ObjectType = 122,
		FunctionType = 123,
		ArrayType = 124,
		ConstructorType = 125,
		GenericType = 126,
		TypeQuery = 127,
		InterfaceDeclaration = 128,
		FunctionDeclaration = 129,
		ModuleDeclaration = 130,
		ClassDeclaration = 131,
		EnumDeclaration = 132,
		ImportDeclaration = 133,
		ExportAssignment = 134,
		MemberFunctionDeclaration = 135,
		MemberVariableDeclaration = 136,
		ConstructorDeclaration = 137,
		IndexMemberDeclaration = 138,
		GetAccessor = 139,
		SetAccessor = 140,
		PropertySignature = 141,
		CallSignature = 142,
		ConstructSignature = 143,
		IndexSignature = 144,
		MethodSignature = 145,
		Block = 146,
		IfStatement = 147,
		VariableStatement = 148,
		ExpressionStatement = 149,
		ReturnStatement = 150,
		SwitchStatement = 151,
		BreakStatement = 152,
		ContinueStatement = 153,
		ForStatement = 154,
		ForInStatement = 155,
		EmptyStatement = 156,
		ThrowStatement = 157,
		WhileStatement = 158,
		TryStatement = 159,
		LabeledStatement = 160,
		DoStatement = 161,
		DebuggerStatement = 162,
		WithStatement = 163,
		PlusExpression = 164,
		NegateExpression = 165,
		BitwiseNotExpression = 166,
		LogicalNotExpression = 167,
		PreIncrementExpression = 168,
		PreDecrementExpression = 169,
		DeleteExpression = 170,
		TypeOfExpression = 171,
		VoidExpression = 172,
		CommaExpression = 173,
		AssignmentExpression = 174,
		AddAssignmentExpression = 175,
		SubtractAssignmentExpression = 176,
		MultiplyAssignmentExpression = 177,
		DivideAssignmentExpression = 178,
		ModuloAssignmentExpression = 179,
		AndAssignmentExpression = 180,
		ExclusiveOrAssignmentExpression = 181,
		OrAssignmentExpression = 182,
		LeftShiftAssignmentExpression = 183,
		SignedRightShiftAssignmentExpression = 184,
		UnsignedRightShiftAssignmentExpression = 185,
		ConditionalExpression = 186,
		LogicalOrExpression = 187,
		LogicalAndExpression = 188,
		BitwiseOrExpression = 189,
		BitwiseExclusiveOrExpression = 190,
		BitwiseAndExpression = 191,
		EqualsWithTypeConversionExpression = 192,
		NotEqualsWithTypeConversionExpression = 193,
		EqualsExpression = 194,
		NotEqualsExpression = 195,
		LessThanExpression = 196,
		GreaterThanExpression = 197,
		LessThanOrEqualExpression = 198,
		GreaterThanOrEqualExpression = 199,
		InstanceOfExpression = 200,
		InExpression = 201,
		LeftShiftExpression = 202,
		SignedRightShiftExpression = 203,
		UnsignedRightShiftExpression = 204,
		MultiplyExpression = 205,
		DivideExpression = 206,
		ModuloExpression = 207,
		AddExpression = 208,
		SubtractExpression = 209,
		PostIncrementExpression = 210,
		PostDecrementExpression = 211,
		MemberAccessExpression = 212,
		InvocationExpression = 213,
		ArrayLiteralExpression = 214,
		ObjectLiteralExpression = 215,
		ObjectCreationExpression = 216,
		ParenthesizedExpression = 217,
		ParenthesizedArrowFunctionExpression = 218,
		SimpleArrowFunctionExpression = 219,
		CastExpression = 220,
		ElementAccessExpression = 221,
		FunctionExpression = 222,
		OmittedExpression = 223,
		VariableDeclaration = 224,
		VariableDeclarator = 225,
		ArgumentList = 226,
		ParameterList = 227,
		TypeArgumentList = 228,
		TypeParameterList = 229,
		ExtendsHeritageClause = 230,
		ImplementsHeritageClause = 231,
		EqualsValueClause = 232,
		CaseSwitchClause = 233,
		DefaultSwitchClause = 234,
		ElseClause = 235,
		CatchClause = 236,
		FinallyClause = 237,
		TypeParameter = 238,
		Constraint = 239,
		SimplePropertyAssignment = 240,
		FunctionPropertyAssignment = 241,
		Parameter = 242,
		EnumElement = 243,
		TypeAnnotation = 244,
		ExternalModuleReference = 245,
		ModuleNameModuleReference = 246,
		Last,
		FirstStandardKeyword,
		LastStandardKeyword,
		FirstFutureReservedKeyword,
		LastFutureReservedKeyword,
		FirstFutureReservedStrictKeyword,
		LastFutureReservedStrictKeyword,
		FirstTypeScriptKeyword,
		LastTypeScriptKeyword,
		FirstKeyword,
		LastKeyword,
		FirstToken,
		LastToken,
		FirstPunctuation,
		LastPunctuation,
		FirstFixedWidth,
		LastFixedWidth,
		FirstTrivia,
		LastTrivia,
	}
	class Scanner implements ISlidingWindowSource {
		private slidingWindow;
		private fileName;
		private text;
		private _languageVersion;
		constructor(fileName: string, text: ISimpleText, languageVersion: LanguageVersion, window?: number[]);
		public languageVersion(): LanguageVersion;
		public fetchMoreItems(argument: any, sourceIndex: number, window: number[], destinationIndex: number, spaceAvailable: number): number;
		private currentCharCode();
		public absoluteIndex(): number;
		public setAbsoluteIndex(index: number): void;
		public scan(diagnostics: Diagnostic[], allowRegularExpression: boolean): ISyntaxToken;
		private createToken(fullStart, leadingTriviaInfo, start, kind, end, trailingTriviaInfo, isVariableWidthKeyword);
		private static triviaWindow;
		static scanTrivia(text: ISimpleText, start: number, length: number, isTrailing: boolean): ISyntaxTriviaList;
		private scanTrivia(underlyingText, underlyingTextStart, isTrailing);
		private scanTriviaInfo(diagnostics, isTrailing);
		private isNewLineCharacter(ch);
		private scanWhitespaceTrivia(underlyingText, underlyingTextStart);
		private scanSingleLineCommentTrivia(underlyingText, underlyingTextStart);
		private scanSingleLineCommentTriviaLength();
		private scanMultiLineCommentTrivia(underlyingText, underlyingTextStart);
		private scanMultiLineCommentTriviaLength(diagnostics);
		private scanLineTerminatorSequenceTrivia(ch);
		private scanLineTerminatorSequenceLength(ch);
		private scanSyntaxToken(diagnostics, allowRegularExpression);
		private isIdentifierStart(interpretedChar);
		private isIdentifierPart(interpretedChar);
		private tryFastScanIdentifierOrKeyword(firstCharacter);
		private slowScanIdentifierOrKeyword(diagnostics);
		private scanNumericLiteral(diagnostics);
		private isOctalNumericLiteral();
		private scanOctalNumericLiteral(diagnostics);
		private scanDecimalDigits();
		private scanDecimalNumericLiteral();
		private scanHexNumericLiteral();
		private isHexNumericLiteral();
		private advanceAndSetTokenKind(kind);
		private scanLessThanToken();
		private scanBarToken();
		private scanCaretToken();
		private scanAmpersandToken();
		private scanPercentToken();
		private scanMinusToken();
		private scanPlusToken();
		private scanAsteriskToken();
		private scanEqualsToken();
		private isDotPrefixedNumericLiteral();
		private scanDotToken(diagnostics);
		private scanSlashToken(allowRegularExpression);
		private tryScanRegularExpressionToken();
		private scanExclamationToken();
		private scanDefaultCharacter(character, diagnostics);
		private getErrorMessageText(text);
		private skipEscapeSequence(diagnostics);
		private scanStringLiteral(diagnostics);
		private isUnicodeEscape(character);
		private peekCharOrUnicodeEscape();
		private peekUnicodeOrHexEscape();
		private scanCharOrUnicodeEscape(errors);
		private scanUnicodeOrHexEscape(errors);
		public substring(start: number, end: number, intern: boolean): string;
		private createIllegalEscapeDiagnostic(start, end);
		static isValidIdentifier(text: ISimpleText, languageVersion: LanguageVersion): boolean;
	}
	class ScannerUtilities {
		static identifierKind(array: number[], startIndex: number, length: number): SyntaxKind;
	}
	interface ISeparatedSyntaxList extends ISyntaxElement {
		childAt(index: number): ISyntaxNodeOrToken;
		toArray(): ISyntaxNodeOrToken[];
		toNonSeparatorArray(): ISyntaxNodeOrToken[];
		separatorCount(): number;
		separatorAt(index: number): ISyntaxToken;
		nonSeparatorCount(): number;
		nonSeparatorAt(index: number): ISyntaxNodeOrToken;
		insertChildrenInto(array: ISyntaxElement[], index: number): void;
	}
	interface ISlidingWindowSource {
		fetchMoreItems(argument: any, sourceIndex: number, window: any[], destinationIndex: number, spaceAvailable: number): number;
	}
	class SlidingWindow {
		private source;
		public window: any[];
		private defaultValue;
		private sourceLength;
		public windowCount: number;
		public windowAbsoluteStartIndex: number;
		public currentRelativeItemIndex: number;
		private _pinCount;
		private firstPinnedAbsoluteIndex;
		constructor(source: ISlidingWindowSource, window: any[], defaultValue: any, sourceLength?: number);
		private windowAbsoluteEndIndex();
		private addMoreItemsToWindow(argument);
		private tryShiftOrGrowWindow();
		public absoluteIndex(): number;
		public isAtEndOfSource(): boolean;
		public getAndPinAbsoluteIndex(): number;
		public releaseAndUnpinAbsoluteIndex(absoluteIndex: number): void;
		public rewindToPinnedIndex(absoluteIndex: number): void;
		public currentItem(argument: any): any;
		public peekItemN(n: number): any;
		public moveToNextItem(): void;
		public disgardAllItemsFromCurrentIndexOnwards(): void;
		public setAbsoluteIndex(absoluteIndex: number): void;
		public pinCount(): number;
	}
	interface ISyntaxElement {
		kind(): SyntaxKind;
		isNode(): boolean;
		isToken(): boolean;
		isList(): boolean;
		isSeparatedList(): boolean;
		childCount(): number;
		childAt(index: number): ISyntaxElement;
		isTypeScriptSpecific(): boolean;
		isIncrementallyUnusable(): boolean;
		fullWidth(): number;
		width(): number;
		fullText(): string;
		leadingTrivia(): ISyntaxTriviaList;
		trailingTrivia(): ISyntaxTriviaList;
		leadingTriviaWidth(): number;
		trailingTriviaWidth(): number;
		firstToken(): ISyntaxToken;
		lastToken(): ISyntaxToken;
		collectTextElements(elements: string[]): void;
	}
	interface ISyntaxNode extends ISyntaxNodeOrToken {
	}
	interface IModuleReferenceSyntax extends ISyntaxNode {
		isModuleReference(): boolean;
	}
	interface IModuleElementSyntax extends ISyntaxNode {
	}
	interface IStatementSyntax extends IModuleElementSyntax {
		isStatement(): boolean;
	}
	interface IIterationStatementSyntax extends IStatementSyntax {
		isIterationStatement(): boolean;
	}
	interface ITypeMemberSyntax extends ISyntaxNode {
	}
	interface IClassElementSyntax extends ISyntaxNode {
	}
	interface IMemberDeclarationSyntax extends IClassElementSyntax {
	}
	interface IPropertyAssignmentSyntax extends IClassElementSyntax {
	}
	interface ISwitchClauseSyntax extends ISyntaxNode {
		isSwitchClause(): boolean;
		statements: ISyntaxList;
	}
	interface IExpressionSyntax extends ISyntaxNodeOrToken {
		isExpression(): boolean;
		withLeadingTrivia(trivia: ISyntaxTriviaList): IExpressionSyntax;
		withTrailingTrivia(trivia: ISyntaxTriviaList): IExpressionSyntax;
	}
	interface IUnaryExpressionSyntax extends IExpressionSyntax {
		isUnaryExpression(): boolean;
	}
	interface IArrowFunctionExpressionSyntax extends IUnaryExpressionSyntax {
		isArrowFunctionExpression(): boolean;
		equalsGreaterThanToken: ISyntaxToken;
		block: BlockSyntax;
		expression: IExpressionSyntax;
	}
	interface IPostfixExpressionSyntax extends IUnaryExpressionSyntax {
		isPostfixExpression(): boolean;
	}
	interface IMemberExpressionSyntax extends IPostfixExpressionSyntax {
		isMemberExpression(): boolean;
	}
	interface IPrimaryExpressionSyntax extends IMemberExpressionSyntax {
		isPrimaryExpression(): boolean;
	}
	interface ITypeSyntax extends ISyntaxNodeOrToken {
	}
	interface INameSyntax extends ITypeSyntax {
	}
	interface ISyntaxList extends ISyntaxElement {
		childAt(index: number): ISyntaxNodeOrToken;
		toArray(): ISyntaxNodeOrToken[];
		insertChildrenInto(array: ISyntaxElement[], index: number): void;
	}
	class SyntaxNode implements ISyntaxNodeOrToken {
		private _data;
		constructor(parsedInStrictMode: boolean);
		public isNode(): boolean;
		public isToken(): boolean;
		public isList(): boolean;
		public isSeparatedList(): boolean;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public firstToken(): ISyntaxToken;
		public lastToken(): ISyntaxToken;
		public insertChildrenInto(array: ISyntaxElement[], index: number): void;
		public leadingTrivia(): ISyntaxTriviaList;
		public trailingTrivia(): ISyntaxTriviaList;
		public toJSON(key: any): any;
		public accept(visitor: ISyntaxVisitor): any;
		public fullText(): string;
		public collectTextElements(elements: string[]): void;
		public replaceToken(token1: ISyntaxToken, token2: ISyntaxToken): SyntaxNode;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): SyntaxNode;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): SyntaxNode;
		public hasLeadingTrivia(): boolean;
		public hasTrailingTrivia(): boolean;
		public isTypeScriptSpecific(): boolean;
		public isIncrementallyUnusable(): boolean;
		public parsedInStrictMode(): boolean;
		public fullWidth(): number;
		private computeData();
		private data();
		/**
		* Finds a token according to the following rules:
		* 1) If position matches the End of the node/s FullSpan and the node is SourceUnit,
		*    then the EOF token is returned.
		*
		*  2) If node.FullSpan.Contains(position) then the token that contains given position is
		*     returned.
		*
		*  3) Otherwise an ArgumentOutOfRangeException is thrown
		*
		* Note: findToken will always return a non-missing token with width greater than or equal to
		* 1 (except for EOF).  Empty tokens synthesized by the parser are never returned.
		*/
		public findToken(position: number, includeSkippedTokens?: boolean): PositionedToken;
		private tryGetEndOfFileAt(position);
		private findTokenInternal(parent, position, fullStart);
		public findTokenOnLeft(position: number, includeSkippedTokens?: boolean): PositionedToken;
		public findCompleteTokenOnLeft(position: number, includeSkippedTokens?: boolean): PositionedToken;
		public isModuleElement(): boolean;
		public isClassElement(): boolean;
		public isTypeMember(): boolean;
		public isStatement(): boolean;
		public isExpression(): boolean;
		public isSwitchClause(): boolean;
		public structuralEquals(node: SyntaxNode): boolean;
		public width(): number;
		public leadingTriviaWidth(): number;
		public trailingTriviaWidth(): number;
	}
	interface ISyntaxNodeOrToken extends ISyntaxElement {
		withLeadingTrivia(leadingTrivia: ISyntaxTriviaList): ISyntaxNodeOrToken;
		withTrailingTrivia(trailingTrivia: ISyntaxTriviaList): ISyntaxNodeOrToken;
		accept(visitor: ISyntaxVisitor): any;
	}
	class SourceUnitSyntax extends SyntaxNode {
		public moduleElements: ISyntaxList;
		public endOfFileToken: ISyntaxToken;
		constructor(moduleElements: ISyntaxList, endOfFileToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public update(moduleElements: ISyntaxList, endOfFileToken: ISyntaxToken): SourceUnitSyntax;
		static create(endOfFileToken: ISyntaxToken): SourceUnitSyntax;
		static create1(endOfFileToken: ISyntaxToken): SourceUnitSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): SourceUnitSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): SourceUnitSyntax;
		public withModuleElements(moduleElements: ISyntaxList): SourceUnitSyntax;
		public withModuleElement(moduleElement: IModuleElementSyntax): SourceUnitSyntax;
		public withEndOfFileToken(endOfFileToken: ISyntaxToken): SourceUnitSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class ExternalModuleReferenceSyntax extends SyntaxNode implements IModuleReferenceSyntax {
		public requireKeyword: ISyntaxToken;
		public openParenToken: ISyntaxToken;
		public stringLiteral: ISyntaxToken;
		public closeParenToken: ISyntaxToken;
		constructor(requireKeyword: ISyntaxToken, openParenToken: ISyntaxToken, stringLiteral: ISyntaxToken, closeParenToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isModuleReference(): boolean;
		public update(requireKeyword: ISyntaxToken, openParenToken: ISyntaxToken, stringLiteral: ISyntaxToken, closeParenToken: ISyntaxToken): ExternalModuleReferenceSyntax;
		static create1(stringLiteral: ISyntaxToken): ExternalModuleReferenceSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): ExternalModuleReferenceSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): ExternalModuleReferenceSyntax;
		public withRequireKeyword(requireKeyword: ISyntaxToken): ExternalModuleReferenceSyntax;
		public withOpenParenToken(openParenToken: ISyntaxToken): ExternalModuleReferenceSyntax;
		public withStringLiteral(stringLiteral: ISyntaxToken): ExternalModuleReferenceSyntax;
		public withCloseParenToken(closeParenToken: ISyntaxToken): ExternalModuleReferenceSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class ModuleNameModuleReferenceSyntax extends SyntaxNode implements IModuleReferenceSyntax {
		public moduleName: INameSyntax;
		constructor(moduleName: INameSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isModuleReference(): boolean;
		public update(moduleName: INameSyntax): ModuleNameModuleReferenceSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): ModuleNameModuleReferenceSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): ModuleNameModuleReferenceSyntax;
		public withModuleName(moduleName: INameSyntax): ModuleNameModuleReferenceSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class ImportDeclarationSyntax extends SyntaxNode implements IModuleElementSyntax {
		public modifiers: ISyntaxList;
		public importKeyword: ISyntaxToken;
		public identifier: ISyntaxToken;
		public equalsToken: ISyntaxToken;
		public moduleReference: IModuleReferenceSyntax;
		public semicolonToken: ISyntaxToken;
		constructor(modifiers: ISyntaxList, importKeyword: ISyntaxToken, identifier: ISyntaxToken, equalsToken: ISyntaxToken, moduleReference: IModuleReferenceSyntax, semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isModuleElement(): boolean;
		public update(modifiers: ISyntaxList, importKeyword: ISyntaxToken, identifier: ISyntaxToken, equalsToken: ISyntaxToken, moduleReference: IModuleReferenceSyntax, semicolonToken: ISyntaxToken): ImportDeclarationSyntax;
		static create(importKeyword: ISyntaxToken, identifier: ISyntaxToken, equalsToken: ISyntaxToken, moduleReference: IModuleReferenceSyntax, semicolonToken: ISyntaxToken): ImportDeclarationSyntax;
		static create1(identifier: ISyntaxToken, moduleReference: IModuleReferenceSyntax): ImportDeclarationSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): ImportDeclarationSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): ImportDeclarationSyntax;
		public withModifiers(modifiers: ISyntaxList): ImportDeclarationSyntax;
		public withModifier(modifier: ISyntaxToken): ImportDeclarationSyntax;
		public withImportKeyword(importKeyword: ISyntaxToken): ImportDeclarationSyntax;
		public withIdentifier(identifier: ISyntaxToken): ImportDeclarationSyntax;
		public withEqualsToken(equalsToken: ISyntaxToken): ImportDeclarationSyntax;
		public withModuleReference(moduleReference: IModuleReferenceSyntax): ImportDeclarationSyntax;
		public withSemicolonToken(semicolonToken: ISyntaxToken): ImportDeclarationSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class ExportAssignmentSyntax extends SyntaxNode implements IModuleElementSyntax {
		public exportKeyword: ISyntaxToken;
		public equalsToken: ISyntaxToken;
		public identifier: ISyntaxToken;
		public semicolonToken: ISyntaxToken;
		constructor(exportKeyword: ISyntaxToken, equalsToken: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isModuleElement(): boolean;
		public update(exportKeyword: ISyntaxToken, equalsToken: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken): ExportAssignmentSyntax;
		static create1(identifier: ISyntaxToken): ExportAssignmentSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): ExportAssignmentSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): ExportAssignmentSyntax;
		public withExportKeyword(exportKeyword: ISyntaxToken): ExportAssignmentSyntax;
		public withEqualsToken(equalsToken: ISyntaxToken): ExportAssignmentSyntax;
		public withIdentifier(identifier: ISyntaxToken): ExportAssignmentSyntax;
		public withSemicolonToken(semicolonToken: ISyntaxToken): ExportAssignmentSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class ClassDeclarationSyntax extends SyntaxNode implements IModuleElementSyntax {
		public modifiers: ISyntaxList;
		public classKeyword: ISyntaxToken;
		public identifier: ISyntaxToken;
		public typeParameterList: TypeParameterListSyntax;
		public heritageClauses: ISyntaxList;
		public openBraceToken: ISyntaxToken;
		public classElements: ISyntaxList;
		public closeBraceToken: ISyntaxToken;
		constructor(modifiers: ISyntaxList, classKeyword: ISyntaxToken, identifier: ISyntaxToken, typeParameterList: TypeParameterListSyntax, heritageClauses: ISyntaxList, openBraceToken: ISyntaxToken, classElements: ISyntaxList, closeBraceToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isModuleElement(): boolean;
		public update(modifiers: ISyntaxList, classKeyword: ISyntaxToken, identifier: ISyntaxToken, typeParameterList: TypeParameterListSyntax, heritageClauses: ISyntaxList, openBraceToken: ISyntaxToken, classElements: ISyntaxList, closeBraceToken: ISyntaxToken): ClassDeclarationSyntax;
		static create(classKeyword: ISyntaxToken, identifier: ISyntaxToken, openBraceToken: ISyntaxToken, closeBraceToken: ISyntaxToken): ClassDeclarationSyntax;
		static create1(identifier: ISyntaxToken): ClassDeclarationSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): ClassDeclarationSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): ClassDeclarationSyntax;
		public withModifiers(modifiers: ISyntaxList): ClassDeclarationSyntax;
		public withModifier(modifier: ISyntaxToken): ClassDeclarationSyntax;
		public withClassKeyword(classKeyword: ISyntaxToken): ClassDeclarationSyntax;
		public withIdentifier(identifier: ISyntaxToken): ClassDeclarationSyntax;
		public withTypeParameterList(typeParameterList: TypeParameterListSyntax): ClassDeclarationSyntax;
		public withHeritageClauses(heritageClauses: ISyntaxList): ClassDeclarationSyntax;
		public withHeritageClause(heritageClause: HeritageClauseSyntax): ClassDeclarationSyntax;
		public withOpenBraceToken(openBraceToken: ISyntaxToken): ClassDeclarationSyntax;
		public withClassElements(classElements: ISyntaxList): ClassDeclarationSyntax;
		public withClassElement(classElement: IClassElementSyntax): ClassDeclarationSyntax;
		public withCloseBraceToken(closeBraceToken: ISyntaxToken): ClassDeclarationSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class InterfaceDeclarationSyntax extends SyntaxNode implements IModuleElementSyntax {
		public modifiers: ISyntaxList;
		public interfaceKeyword: ISyntaxToken;
		public identifier: ISyntaxToken;
		public typeParameterList: TypeParameterListSyntax;
		public heritageClauses: ISyntaxList;
		public body: ObjectTypeSyntax;
		constructor(modifiers: ISyntaxList, interfaceKeyword: ISyntaxToken, identifier: ISyntaxToken, typeParameterList: TypeParameterListSyntax, heritageClauses: ISyntaxList, body: ObjectTypeSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isModuleElement(): boolean;
		public update(modifiers: ISyntaxList, interfaceKeyword: ISyntaxToken, identifier: ISyntaxToken, typeParameterList: TypeParameterListSyntax, heritageClauses: ISyntaxList, body: ObjectTypeSyntax): InterfaceDeclarationSyntax;
		static create(interfaceKeyword: ISyntaxToken, identifier: ISyntaxToken, body: ObjectTypeSyntax): InterfaceDeclarationSyntax;
		static create1(identifier: ISyntaxToken): InterfaceDeclarationSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): InterfaceDeclarationSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): InterfaceDeclarationSyntax;
		public withModifiers(modifiers: ISyntaxList): InterfaceDeclarationSyntax;
		public withModifier(modifier: ISyntaxToken): InterfaceDeclarationSyntax;
		public withInterfaceKeyword(interfaceKeyword: ISyntaxToken): InterfaceDeclarationSyntax;
		public withIdentifier(identifier: ISyntaxToken): InterfaceDeclarationSyntax;
		public withTypeParameterList(typeParameterList: TypeParameterListSyntax): InterfaceDeclarationSyntax;
		public withHeritageClauses(heritageClauses: ISyntaxList): InterfaceDeclarationSyntax;
		public withHeritageClause(heritageClause: HeritageClauseSyntax): InterfaceDeclarationSyntax;
		public withBody(body: ObjectTypeSyntax): InterfaceDeclarationSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class HeritageClauseSyntax extends SyntaxNode {
		public extendsOrImplementsKeyword: ISyntaxToken;
		public typeNames: ISeparatedSyntaxList;
		private _kind;
		constructor(kind: SyntaxKind, extendsOrImplementsKeyword: ISyntaxToken, typeNames: ISeparatedSyntaxList, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public kind(): SyntaxKind;
		public update(kind: SyntaxKind, extendsOrImplementsKeyword: ISyntaxToken, typeNames: ISeparatedSyntaxList): HeritageClauseSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): HeritageClauseSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): HeritageClauseSyntax;
		public withKind(kind: SyntaxKind): HeritageClauseSyntax;
		public withExtendsOrImplementsKeyword(extendsOrImplementsKeyword: ISyntaxToken): HeritageClauseSyntax;
		public withTypeNames(typeNames: ISeparatedSyntaxList): HeritageClauseSyntax;
		public withTypeName(typeName: INameSyntax): HeritageClauseSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class ModuleDeclarationSyntax extends SyntaxNode implements IModuleElementSyntax {
		public modifiers: ISyntaxList;
		public moduleKeyword: ISyntaxToken;
		public name: INameSyntax;
		public stringLiteral: ISyntaxToken;
		public openBraceToken: ISyntaxToken;
		public moduleElements: ISyntaxList;
		public closeBraceToken: ISyntaxToken;
		constructor(modifiers: ISyntaxList, moduleKeyword: ISyntaxToken, name: INameSyntax, stringLiteral: ISyntaxToken, openBraceToken: ISyntaxToken, moduleElements: ISyntaxList, closeBraceToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isModuleElement(): boolean;
		public update(modifiers: ISyntaxList, moduleKeyword: ISyntaxToken, name: INameSyntax, stringLiteral: ISyntaxToken, openBraceToken: ISyntaxToken, moduleElements: ISyntaxList, closeBraceToken: ISyntaxToken): ModuleDeclarationSyntax;
		static create(moduleKeyword: ISyntaxToken, openBraceToken: ISyntaxToken, closeBraceToken: ISyntaxToken): ModuleDeclarationSyntax;
		static create1(): ModuleDeclarationSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): ModuleDeclarationSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): ModuleDeclarationSyntax;
		public withModifiers(modifiers: ISyntaxList): ModuleDeclarationSyntax;
		public withModifier(modifier: ISyntaxToken): ModuleDeclarationSyntax;
		public withModuleKeyword(moduleKeyword: ISyntaxToken): ModuleDeclarationSyntax;
		public withName(name: INameSyntax): ModuleDeclarationSyntax;
		public withStringLiteral(stringLiteral: ISyntaxToken): ModuleDeclarationSyntax;
		public withOpenBraceToken(openBraceToken: ISyntaxToken): ModuleDeclarationSyntax;
		public withModuleElements(moduleElements: ISyntaxList): ModuleDeclarationSyntax;
		public withModuleElement(moduleElement: IModuleElementSyntax): ModuleDeclarationSyntax;
		public withCloseBraceToken(closeBraceToken: ISyntaxToken): ModuleDeclarationSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class FunctionDeclarationSyntax extends SyntaxNode implements IStatementSyntax {
		public modifiers: ISyntaxList;
		public functionKeyword: ISyntaxToken;
		public identifier: ISyntaxToken;
		public callSignature: CallSignatureSyntax;
		public block: BlockSyntax;
		public semicolonToken: ISyntaxToken;
		constructor(modifiers: ISyntaxList, functionKeyword: ISyntaxToken, identifier: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isStatement(): boolean;
		public isModuleElement(): boolean;
		public update(modifiers: ISyntaxList, functionKeyword: ISyntaxToken, identifier: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken): FunctionDeclarationSyntax;
		static create(functionKeyword: ISyntaxToken, identifier: ISyntaxToken, callSignature: CallSignatureSyntax): FunctionDeclarationSyntax;
		static create1(identifier: ISyntaxToken): FunctionDeclarationSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): FunctionDeclarationSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): FunctionDeclarationSyntax;
		public withModifiers(modifiers: ISyntaxList): FunctionDeclarationSyntax;
		public withModifier(modifier: ISyntaxToken): FunctionDeclarationSyntax;
		public withFunctionKeyword(functionKeyword: ISyntaxToken): FunctionDeclarationSyntax;
		public withIdentifier(identifier: ISyntaxToken): FunctionDeclarationSyntax;
		public withCallSignature(callSignature: CallSignatureSyntax): FunctionDeclarationSyntax;
		public withBlock(block: BlockSyntax): FunctionDeclarationSyntax;
		public withSemicolonToken(semicolonToken: ISyntaxToken): FunctionDeclarationSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class VariableStatementSyntax extends SyntaxNode implements IStatementSyntax {
		public modifiers: ISyntaxList;
		public variableDeclaration: VariableDeclarationSyntax;
		public semicolonToken: ISyntaxToken;
		constructor(modifiers: ISyntaxList, variableDeclaration: VariableDeclarationSyntax, semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isStatement(): boolean;
		public isModuleElement(): boolean;
		public update(modifiers: ISyntaxList, variableDeclaration: VariableDeclarationSyntax, semicolonToken: ISyntaxToken): VariableStatementSyntax;
		static create(variableDeclaration: VariableDeclarationSyntax, semicolonToken: ISyntaxToken): VariableStatementSyntax;
		static create1(variableDeclaration: VariableDeclarationSyntax): VariableStatementSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): VariableStatementSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): VariableStatementSyntax;
		public withModifiers(modifiers: ISyntaxList): VariableStatementSyntax;
		public withModifier(modifier: ISyntaxToken): VariableStatementSyntax;
		public withVariableDeclaration(variableDeclaration: VariableDeclarationSyntax): VariableStatementSyntax;
		public withSemicolonToken(semicolonToken: ISyntaxToken): VariableStatementSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class VariableDeclarationSyntax extends SyntaxNode {
		public varKeyword: ISyntaxToken;
		public variableDeclarators: ISeparatedSyntaxList;
		constructor(varKeyword: ISyntaxToken, variableDeclarators: ISeparatedSyntaxList, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public update(varKeyword: ISyntaxToken, variableDeclarators: ISeparatedSyntaxList): VariableDeclarationSyntax;
		static create1(variableDeclarators: ISeparatedSyntaxList): VariableDeclarationSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): VariableDeclarationSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): VariableDeclarationSyntax;
		public withVarKeyword(varKeyword: ISyntaxToken): VariableDeclarationSyntax;
		public withVariableDeclarators(variableDeclarators: ISeparatedSyntaxList): VariableDeclarationSyntax;
		public withVariableDeclarator(variableDeclarator: VariableDeclaratorSyntax): VariableDeclarationSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class VariableDeclaratorSyntax extends SyntaxNode {
		public propertyName: ISyntaxToken;
		public typeAnnotation: TypeAnnotationSyntax;
		public equalsValueClause: EqualsValueClauseSyntax;
		constructor(propertyName: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, equalsValueClause: EqualsValueClauseSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public update(propertyName: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, equalsValueClause: EqualsValueClauseSyntax): VariableDeclaratorSyntax;
		static create(propertyName: ISyntaxToken): VariableDeclaratorSyntax;
		static create1(propertyName: ISyntaxToken): VariableDeclaratorSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): VariableDeclaratorSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): VariableDeclaratorSyntax;
		public withPropertyName(propertyName: ISyntaxToken): VariableDeclaratorSyntax;
		public withTypeAnnotation(typeAnnotation: TypeAnnotationSyntax): VariableDeclaratorSyntax;
		public withEqualsValueClause(equalsValueClause: EqualsValueClauseSyntax): VariableDeclaratorSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class EqualsValueClauseSyntax extends SyntaxNode {
		public equalsToken: ISyntaxToken;
		public value: IExpressionSyntax;
		constructor(equalsToken: ISyntaxToken, value: IExpressionSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public update(equalsToken: ISyntaxToken, value: IExpressionSyntax): EqualsValueClauseSyntax;
		static create1(value: IExpressionSyntax): EqualsValueClauseSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): EqualsValueClauseSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): EqualsValueClauseSyntax;
		public withEqualsToken(equalsToken: ISyntaxToken): EqualsValueClauseSyntax;
		public withValue(value: IExpressionSyntax): EqualsValueClauseSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class PrefixUnaryExpressionSyntax extends SyntaxNode implements IUnaryExpressionSyntax {
		public operatorToken: ISyntaxToken;
		public operand: IUnaryExpressionSyntax;
		private _kind;
		constructor(kind: SyntaxKind, operatorToken: ISyntaxToken, operand: IUnaryExpressionSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isUnaryExpression(): boolean;
		public isExpression(): boolean;
		public kind(): SyntaxKind;
		public update(kind: SyntaxKind, operatorToken: ISyntaxToken, operand: IUnaryExpressionSyntax): PrefixUnaryExpressionSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): PrefixUnaryExpressionSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): PrefixUnaryExpressionSyntax;
		public withKind(kind: SyntaxKind): PrefixUnaryExpressionSyntax;
		public withOperatorToken(operatorToken: ISyntaxToken): PrefixUnaryExpressionSyntax;
		public withOperand(operand: IUnaryExpressionSyntax): PrefixUnaryExpressionSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class ArrayLiteralExpressionSyntax extends SyntaxNode implements IPrimaryExpressionSyntax {
		public openBracketToken: ISyntaxToken;
		public expressions: ISeparatedSyntaxList;
		public closeBracketToken: ISyntaxToken;
		constructor(openBracketToken: ISyntaxToken, expressions: ISeparatedSyntaxList, closeBracketToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isPrimaryExpression(): boolean;
		public isMemberExpression(): boolean;
		public isPostfixExpression(): boolean;
		public isUnaryExpression(): boolean;
		public isExpression(): boolean;
		public update(openBracketToken: ISyntaxToken, expressions: ISeparatedSyntaxList, closeBracketToken: ISyntaxToken): ArrayLiteralExpressionSyntax;
		static create(openBracketToken: ISyntaxToken, closeBracketToken: ISyntaxToken): ArrayLiteralExpressionSyntax;
		static create1(): ArrayLiteralExpressionSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): ArrayLiteralExpressionSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): ArrayLiteralExpressionSyntax;
		public withOpenBracketToken(openBracketToken: ISyntaxToken): ArrayLiteralExpressionSyntax;
		public withExpressions(expressions: ISeparatedSyntaxList): ArrayLiteralExpressionSyntax;
		public withExpression(expression: IExpressionSyntax): ArrayLiteralExpressionSyntax;
		public withCloseBracketToken(closeBracketToken: ISyntaxToken): ArrayLiteralExpressionSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class OmittedExpressionSyntax extends SyntaxNode implements IExpressionSyntax {
		constructor(parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isExpression(): boolean;
		public update(): OmittedExpressionSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): OmittedExpressionSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): OmittedExpressionSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class ParenthesizedExpressionSyntax extends SyntaxNode implements IPrimaryExpressionSyntax {
		public openParenToken: ISyntaxToken;
		public expression: IExpressionSyntax;
		public closeParenToken: ISyntaxToken;
		constructor(openParenToken: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isPrimaryExpression(): boolean;
		public isMemberExpression(): boolean;
		public isPostfixExpression(): boolean;
		public isUnaryExpression(): boolean;
		public isExpression(): boolean;
		public update(openParenToken: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken): ParenthesizedExpressionSyntax;
		static create1(expression: IExpressionSyntax): ParenthesizedExpressionSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): ParenthesizedExpressionSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): ParenthesizedExpressionSyntax;
		public withOpenParenToken(openParenToken: ISyntaxToken): ParenthesizedExpressionSyntax;
		public withExpression(expression: IExpressionSyntax): ParenthesizedExpressionSyntax;
		public withCloseParenToken(closeParenToken: ISyntaxToken): ParenthesizedExpressionSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class SimpleArrowFunctionExpressionSyntax extends SyntaxNode implements IArrowFunctionExpressionSyntax {
		public identifier: ISyntaxToken;
		public equalsGreaterThanToken: ISyntaxToken;
		public block: BlockSyntax;
		public expression: IExpressionSyntax;
		constructor(identifier: ISyntaxToken, equalsGreaterThanToken: ISyntaxToken, block: BlockSyntax, expression: IExpressionSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isArrowFunctionExpression(): boolean;
		public isUnaryExpression(): boolean;
		public isExpression(): boolean;
		public update(identifier: ISyntaxToken, equalsGreaterThanToken: ISyntaxToken, block: BlockSyntax, expression: IExpressionSyntax): SimpleArrowFunctionExpressionSyntax;
		static create(identifier: ISyntaxToken, equalsGreaterThanToken: ISyntaxToken): SimpleArrowFunctionExpressionSyntax;
		static create1(identifier: ISyntaxToken): SimpleArrowFunctionExpressionSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): SimpleArrowFunctionExpressionSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): SimpleArrowFunctionExpressionSyntax;
		public withIdentifier(identifier: ISyntaxToken): SimpleArrowFunctionExpressionSyntax;
		public withEqualsGreaterThanToken(equalsGreaterThanToken: ISyntaxToken): SimpleArrowFunctionExpressionSyntax;
		public withBlock(block: BlockSyntax): SimpleArrowFunctionExpressionSyntax;
		public withExpression(expression: IExpressionSyntax): SimpleArrowFunctionExpressionSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class ParenthesizedArrowFunctionExpressionSyntax extends SyntaxNode implements IArrowFunctionExpressionSyntax {
		public callSignature: CallSignatureSyntax;
		public equalsGreaterThanToken: ISyntaxToken;
		public block: BlockSyntax;
		public expression: IExpressionSyntax;
		constructor(callSignature: CallSignatureSyntax, equalsGreaterThanToken: ISyntaxToken, block: BlockSyntax, expression: IExpressionSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isArrowFunctionExpression(): boolean;
		public isUnaryExpression(): boolean;
		public isExpression(): boolean;
		public update(callSignature: CallSignatureSyntax, equalsGreaterThanToken: ISyntaxToken, block: BlockSyntax, expression: IExpressionSyntax): ParenthesizedArrowFunctionExpressionSyntax;
		static create(callSignature: CallSignatureSyntax, equalsGreaterThanToken: ISyntaxToken): ParenthesizedArrowFunctionExpressionSyntax;
		static create1(): ParenthesizedArrowFunctionExpressionSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): ParenthesizedArrowFunctionExpressionSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): ParenthesizedArrowFunctionExpressionSyntax;
		public withCallSignature(callSignature: CallSignatureSyntax): ParenthesizedArrowFunctionExpressionSyntax;
		public withEqualsGreaterThanToken(equalsGreaterThanToken: ISyntaxToken): ParenthesizedArrowFunctionExpressionSyntax;
		public withBlock(block: BlockSyntax): ParenthesizedArrowFunctionExpressionSyntax;
		public withExpression(expression: IExpressionSyntax): ParenthesizedArrowFunctionExpressionSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class QualifiedNameSyntax extends SyntaxNode implements INameSyntax {
		public left: INameSyntax;
		public dotToken: ISyntaxToken;
		public right: ISyntaxToken;
		constructor(left: INameSyntax, dotToken: ISyntaxToken, right: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isName(): boolean;
		public isType(): boolean;
		public update(left: INameSyntax, dotToken: ISyntaxToken, right: ISyntaxToken): QualifiedNameSyntax;
		static create1(left: INameSyntax, right: ISyntaxToken): QualifiedNameSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): QualifiedNameSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): QualifiedNameSyntax;
		public withLeft(left: INameSyntax): QualifiedNameSyntax;
		public withDotToken(dotToken: ISyntaxToken): QualifiedNameSyntax;
		public withRight(right: ISyntaxToken): QualifiedNameSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class TypeArgumentListSyntax extends SyntaxNode {
		public lessThanToken: ISyntaxToken;
		public typeArguments: ISeparatedSyntaxList;
		public greaterThanToken: ISyntaxToken;
		constructor(lessThanToken: ISyntaxToken, typeArguments: ISeparatedSyntaxList, greaterThanToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public update(lessThanToken: ISyntaxToken, typeArguments: ISeparatedSyntaxList, greaterThanToken: ISyntaxToken): TypeArgumentListSyntax;
		static create(lessThanToken: ISyntaxToken, greaterThanToken: ISyntaxToken): TypeArgumentListSyntax;
		static create1(): TypeArgumentListSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): TypeArgumentListSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): TypeArgumentListSyntax;
		public withLessThanToken(lessThanToken: ISyntaxToken): TypeArgumentListSyntax;
		public withTypeArguments(typeArguments: ISeparatedSyntaxList): TypeArgumentListSyntax;
		public withTypeArgument(typeArgument: ITypeSyntax): TypeArgumentListSyntax;
		public withGreaterThanToken(greaterThanToken: ISyntaxToken): TypeArgumentListSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class ConstructorTypeSyntax extends SyntaxNode implements ITypeSyntax {
		public newKeyword: ISyntaxToken;
		public typeParameterList: TypeParameterListSyntax;
		public parameterList: ParameterListSyntax;
		public equalsGreaterThanToken: ISyntaxToken;
		public type: ITypeSyntax;
		constructor(newKeyword: ISyntaxToken, typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, equalsGreaterThanToken: ISyntaxToken, type: ITypeSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isType(): boolean;
		public update(newKeyword: ISyntaxToken, typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, equalsGreaterThanToken: ISyntaxToken, type: ITypeSyntax): ConstructorTypeSyntax;
		static create(newKeyword: ISyntaxToken, parameterList: ParameterListSyntax, equalsGreaterThanToken: ISyntaxToken, type: ITypeSyntax): ConstructorTypeSyntax;
		static create1(type: ITypeSyntax): ConstructorTypeSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): ConstructorTypeSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): ConstructorTypeSyntax;
		public withNewKeyword(newKeyword: ISyntaxToken): ConstructorTypeSyntax;
		public withTypeParameterList(typeParameterList: TypeParameterListSyntax): ConstructorTypeSyntax;
		public withParameterList(parameterList: ParameterListSyntax): ConstructorTypeSyntax;
		public withEqualsGreaterThanToken(equalsGreaterThanToken: ISyntaxToken): ConstructorTypeSyntax;
		public withType(type: ITypeSyntax): ConstructorTypeSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class FunctionTypeSyntax extends SyntaxNode implements ITypeSyntax {
		public typeParameterList: TypeParameterListSyntax;
		public parameterList: ParameterListSyntax;
		public equalsGreaterThanToken: ISyntaxToken;
		public type: ITypeSyntax;
		constructor(typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, equalsGreaterThanToken: ISyntaxToken, type: ITypeSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isType(): boolean;
		public update(typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, equalsGreaterThanToken: ISyntaxToken, type: ITypeSyntax): FunctionTypeSyntax;
		static create(parameterList: ParameterListSyntax, equalsGreaterThanToken: ISyntaxToken, type: ITypeSyntax): FunctionTypeSyntax;
		static create1(type: ITypeSyntax): FunctionTypeSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): FunctionTypeSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): FunctionTypeSyntax;
		public withTypeParameterList(typeParameterList: TypeParameterListSyntax): FunctionTypeSyntax;
		public withParameterList(parameterList: ParameterListSyntax): FunctionTypeSyntax;
		public withEqualsGreaterThanToken(equalsGreaterThanToken: ISyntaxToken): FunctionTypeSyntax;
		public withType(type: ITypeSyntax): FunctionTypeSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class ObjectTypeSyntax extends SyntaxNode implements ITypeSyntax {
		public openBraceToken: ISyntaxToken;
		public typeMembers: ISeparatedSyntaxList;
		public closeBraceToken: ISyntaxToken;
		constructor(openBraceToken: ISyntaxToken, typeMembers: ISeparatedSyntaxList, closeBraceToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isType(): boolean;
		public update(openBraceToken: ISyntaxToken, typeMembers: ISeparatedSyntaxList, closeBraceToken: ISyntaxToken): ObjectTypeSyntax;
		static create(openBraceToken: ISyntaxToken, closeBraceToken: ISyntaxToken): ObjectTypeSyntax;
		static create1(): ObjectTypeSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): ObjectTypeSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): ObjectTypeSyntax;
		public withOpenBraceToken(openBraceToken: ISyntaxToken): ObjectTypeSyntax;
		public withTypeMembers(typeMembers: ISeparatedSyntaxList): ObjectTypeSyntax;
		public withTypeMember(typeMember: ITypeMemberSyntax): ObjectTypeSyntax;
		public withCloseBraceToken(closeBraceToken: ISyntaxToken): ObjectTypeSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class ArrayTypeSyntax extends SyntaxNode implements ITypeSyntax {
		public type: ITypeSyntax;
		public openBracketToken: ISyntaxToken;
		public closeBracketToken: ISyntaxToken;
		constructor(type: ITypeSyntax, openBracketToken: ISyntaxToken, closeBracketToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isType(): boolean;
		public update(type: ITypeSyntax, openBracketToken: ISyntaxToken, closeBracketToken: ISyntaxToken): ArrayTypeSyntax;
		static create1(type: ITypeSyntax): ArrayTypeSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): ArrayTypeSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): ArrayTypeSyntax;
		public withType(type: ITypeSyntax): ArrayTypeSyntax;
		public withOpenBracketToken(openBracketToken: ISyntaxToken): ArrayTypeSyntax;
		public withCloseBracketToken(closeBracketToken: ISyntaxToken): ArrayTypeSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class GenericTypeSyntax extends SyntaxNode implements ITypeSyntax {
		public name: INameSyntax;
		public typeArgumentList: TypeArgumentListSyntax;
		constructor(name: INameSyntax, typeArgumentList: TypeArgumentListSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isType(): boolean;
		public update(name: INameSyntax, typeArgumentList: TypeArgumentListSyntax): GenericTypeSyntax;
		static create1(name: INameSyntax): GenericTypeSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): GenericTypeSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): GenericTypeSyntax;
		public withName(name: INameSyntax): GenericTypeSyntax;
		public withTypeArgumentList(typeArgumentList: TypeArgumentListSyntax): GenericTypeSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class TypeQuerySyntax extends SyntaxNode implements ITypeSyntax {
		public typeOfKeyword: ISyntaxToken;
		public name: INameSyntax;
		constructor(typeOfKeyword: ISyntaxToken, name: INameSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isType(): boolean;
		public update(typeOfKeyword: ISyntaxToken, name: INameSyntax): TypeQuerySyntax;
		static create1(name: INameSyntax): TypeQuerySyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): TypeQuerySyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): TypeQuerySyntax;
		public withTypeOfKeyword(typeOfKeyword: ISyntaxToken): TypeQuerySyntax;
		public withName(name: INameSyntax): TypeQuerySyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class TypeAnnotationSyntax extends SyntaxNode {
		public colonToken: ISyntaxToken;
		public type: ITypeSyntax;
		constructor(colonToken: ISyntaxToken, type: ITypeSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public update(colonToken: ISyntaxToken, type: ITypeSyntax): TypeAnnotationSyntax;
		static create1(type: ITypeSyntax): TypeAnnotationSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): TypeAnnotationSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): TypeAnnotationSyntax;
		public withColonToken(colonToken: ISyntaxToken): TypeAnnotationSyntax;
		public withType(type: ITypeSyntax): TypeAnnotationSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class BlockSyntax extends SyntaxNode implements IStatementSyntax {
		public openBraceToken: ISyntaxToken;
		public statements: ISyntaxList;
		public closeBraceToken: ISyntaxToken;
		constructor(openBraceToken: ISyntaxToken, statements: ISyntaxList, closeBraceToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isStatement(): boolean;
		public isModuleElement(): boolean;
		public update(openBraceToken: ISyntaxToken, statements: ISyntaxList, closeBraceToken: ISyntaxToken): BlockSyntax;
		static create(openBraceToken: ISyntaxToken, closeBraceToken: ISyntaxToken): BlockSyntax;
		static create1(): BlockSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): BlockSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): BlockSyntax;
		public withOpenBraceToken(openBraceToken: ISyntaxToken): BlockSyntax;
		public withStatements(statements: ISyntaxList): BlockSyntax;
		public withStatement(statement: IStatementSyntax): BlockSyntax;
		public withCloseBraceToken(closeBraceToken: ISyntaxToken): BlockSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class ParameterSyntax extends SyntaxNode {
		public dotDotDotToken: ISyntaxToken;
		public modifiers: ISyntaxList;
		public identifier: ISyntaxToken;
		public questionToken: ISyntaxToken;
		public typeAnnotation: TypeAnnotationSyntax;
		public equalsValueClause: EqualsValueClauseSyntax;
		constructor(dotDotDotToken: ISyntaxToken, modifiers: ISyntaxList, identifier: ISyntaxToken, questionToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, equalsValueClause: EqualsValueClauseSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public update(dotDotDotToken: ISyntaxToken, modifiers: ISyntaxList, identifier: ISyntaxToken, questionToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, equalsValueClause: EqualsValueClauseSyntax): ParameterSyntax;
		static create(identifier: ISyntaxToken): ParameterSyntax;
		static create1(identifier: ISyntaxToken): ParameterSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): ParameterSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): ParameterSyntax;
		public withDotDotDotToken(dotDotDotToken: ISyntaxToken): ParameterSyntax;
		public withModifiers(modifiers: ISyntaxList): ParameterSyntax;
		public withModifier(modifier: ISyntaxToken): ParameterSyntax;
		public withIdentifier(identifier: ISyntaxToken): ParameterSyntax;
		public withQuestionToken(questionToken: ISyntaxToken): ParameterSyntax;
		public withTypeAnnotation(typeAnnotation: TypeAnnotationSyntax): ParameterSyntax;
		public withEqualsValueClause(equalsValueClause: EqualsValueClauseSyntax): ParameterSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class MemberAccessExpressionSyntax extends SyntaxNode implements IMemberExpressionSyntax {
		public expression: IExpressionSyntax;
		public dotToken: ISyntaxToken;
		public name: ISyntaxToken;
		constructor(expression: IExpressionSyntax, dotToken: ISyntaxToken, name: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isMemberExpression(): boolean;
		public isPostfixExpression(): boolean;
		public isUnaryExpression(): boolean;
		public isExpression(): boolean;
		public update(expression: IExpressionSyntax, dotToken: ISyntaxToken, name: ISyntaxToken): MemberAccessExpressionSyntax;
		static create1(expression: IExpressionSyntax, name: ISyntaxToken): MemberAccessExpressionSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): MemberAccessExpressionSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): MemberAccessExpressionSyntax;
		public withExpression(expression: IExpressionSyntax): MemberAccessExpressionSyntax;
		public withDotToken(dotToken: ISyntaxToken): MemberAccessExpressionSyntax;
		public withName(name: ISyntaxToken): MemberAccessExpressionSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class PostfixUnaryExpressionSyntax extends SyntaxNode implements IPostfixExpressionSyntax {
		public operand: IMemberExpressionSyntax;
		public operatorToken: ISyntaxToken;
		private _kind;
		constructor(kind: SyntaxKind, operand: IMemberExpressionSyntax, operatorToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isPostfixExpression(): boolean;
		public isUnaryExpression(): boolean;
		public isExpression(): boolean;
		public kind(): SyntaxKind;
		public update(kind: SyntaxKind, operand: IMemberExpressionSyntax, operatorToken: ISyntaxToken): PostfixUnaryExpressionSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): PostfixUnaryExpressionSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): PostfixUnaryExpressionSyntax;
		public withKind(kind: SyntaxKind): PostfixUnaryExpressionSyntax;
		public withOperand(operand: IMemberExpressionSyntax): PostfixUnaryExpressionSyntax;
		public withOperatorToken(operatorToken: ISyntaxToken): PostfixUnaryExpressionSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class ElementAccessExpressionSyntax extends SyntaxNode implements IMemberExpressionSyntax {
		public expression: IExpressionSyntax;
		public openBracketToken: ISyntaxToken;
		public argumentExpression: IExpressionSyntax;
		public closeBracketToken: ISyntaxToken;
		constructor(expression: IExpressionSyntax, openBracketToken: ISyntaxToken, argumentExpression: IExpressionSyntax, closeBracketToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isMemberExpression(): boolean;
		public isPostfixExpression(): boolean;
		public isUnaryExpression(): boolean;
		public isExpression(): boolean;
		public update(expression: IExpressionSyntax, openBracketToken: ISyntaxToken, argumentExpression: IExpressionSyntax, closeBracketToken: ISyntaxToken): ElementAccessExpressionSyntax;
		static create1(expression: IExpressionSyntax, argumentExpression: IExpressionSyntax): ElementAccessExpressionSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): ElementAccessExpressionSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): ElementAccessExpressionSyntax;
		public withExpression(expression: IExpressionSyntax): ElementAccessExpressionSyntax;
		public withOpenBracketToken(openBracketToken: ISyntaxToken): ElementAccessExpressionSyntax;
		public withArgumentExpression(argumentExpression: IExpressionSyntax): ElementAccessExpressionSyntax;
		public withCloseBracketToken(closeBracketToken: ISyntaxToken): ElementAccessExpressionSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class InvocationExpressionSyntax extends SyntaxNode implements IMemberExpressionSyntax {
		public expression: IMemberExpressionSyntax;
		public argumentList: ArgumentListSyntax;
		constructor(expression: IMemberExpressionSyntax, argumentList: ArgumentListSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isMemberExpression(): boolean;
		public isPostfixExpression(): boolean;
		public isUnaryExpression(): boolean;
		public isExpression(): boolean;
		public update(expression: IMemberExpressionSyntax, argumentList: ArgumentListSyntax): InvocationExpressionSyntax;
		static create1(expression: IMemberExpressionSyntax): InvocationExpressionSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): InvocationExpressionSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): InvocationExpressionSyntax;
		public withExpression(expression: IMemberExpressionSyntax): InvocationExpressionSyntax;
		public withArgumentList(argumentList: ArgumentListSyntax): InvocationExpressionSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class ArgumentListSyntax extends SyntaxNode {
		public typeArgumentList: TypeArgumentListSyntax;
		public openParenToken: ISyntaxToken;
		public arguments: ISeparatedSyntaxList;
		public closeParenToken: ISyntaxToken;
		constructor(typeArgumentList: TypeArgumentListSyntax, openParenToken: ISyntaxToken, arguments: ISeparatedSyntaxList, closeParenToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public update(typeArgumentList: TypeArgumentListSyntax, openParenToken: ISyntaxToken, _arguments: ISeparatedSyntaxList, closeParenToken: ISyntaxToken): ArgumentListSyntax;
		static create(openParenToken: ISyntaxToken, closeParenToken: ISyntaxToken): ArgumentListSyntax;
		static create1(): ArgumentListSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): ArgumentListSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): ArgumentListSyntax;
		public withTypeArgumentList(typeArgumentList: TypeArgumentListSyntax): ArgumentListSyntax;
		public withOpenParenToken(openParenToken: ISyntaxToken): ArgumentListSyntax;
		public withArguments(_arguments: ISeparatedSyntaxList): ArgumentListSyntax;
		public withArgument(_argument: IExpressionSyntax): ArgumentListSyntax;
		public withCloseParenToken(closeParenToken: ISyntaxToken): ArgumentListSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class BinaryExpressionSyntax extends SyntaxNode implements IExpressionSyntax {
		public left: IExpressionSyntax;
		public operatorToken: ISyntaxToken;
		public right: IExpressionSyntax;
		private _kind;
		constructor(kind: SyntaxKind, left: IExpressionSyntax, operatorToken: ISyntaxToken, right: IExpressionSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isExpression(): boolean;
		public kind(): SyntaxKind;
		public update(kind: SyntaxKind, left: IExpressionSyntax, operatorToken: ISyntaxToken, right: IExpressionSyntax): BinaryExpressionSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): BinaryExpressionSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): BinaryExpressionSyntax;
		public withKind(kind: SyntaxKind): BinaryExpressionSyntax;
		public withLeft(left: IExpressionSyntax): BinaryExpressionSyntax;
		public withOperatorToken(operatorToken: ISyntaxToken): BinaryExpressionSyntax;
		public withRight(right: IExpressionSyntax): BinaryExpressionSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class ConditionalExpressionSyntax extends SyntaxNode implements IExpressionSyntax {
		public condition: IExpressionSyntax;
		public questionToken: ISyntaxToken;
		public whenTrue: IExpressionSyntax;
		public colonToken: ISyntaxToken;
		public whenFalse: IExpressionSyntax;
		constructor(condition: IExpressionSyntax, questionToken: ISyntaxToken, whenTrue: IExpressionSyntax, colonToken: ISyntaxToken, whenFalse: IExpressionSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isExpression(): boolean;
		public update(condition: IExpressionSyntax, questionToken: ISyntaxToken, whenTrue: IExpressionSyntax, colonToken: ISyntaxToken, whenFalse: IExpressionSyntax): ConditionalExpressionSyntax;
		static create1(condition: IExpressionSyntax, whenTrue: IExpressionSyntax, whenFalse: IExpressionSyntax): ConditionalExpressionSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): ConditionalExpressionSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): ConditionalExpressionSyntax;
		public withCondition(condition: IExpressionSyntax): ConditionalExpressionSyntax;
		public withQuestionToken(questionToken: ISyntaxToken): ConditionalExpressionSyntax;
		public withWhenTrue(whenTrue: IExpressionSyntax): ConditionalExpressionSyntax;
		public withColonToken(colonToken: ISyntaxToken): ConditionalExpressionSyntax;
		public withWhenFalse(whenFalse: IExpressionSyntax): ConditionalExpressionSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class ConstructSignatureSyntax extends SyntaxNode implements ITypeMemberSyntax {
		public newKeyword: ISyntaxToken;
		public callSignature: CallSignatureSyntax;
		constructor(newKeyword: ISyntaxToken, callSignature: CallSignatureSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isTypeMember(): boolean;
		public update(newKeyword: ISyntaxToken, callSignature: CallSignatureSyntax): ConstructSignatureSyntax;
		static create1(): ConstructSignatureSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): ConstructSignatureSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): ConstructSignatureSyntax;
		public withNewKeyword(newKeyword: ISyntaxToken): ConstructSignatureSyntax;
		public withCallSignature(callSignature: CallSignatureSyntax): ConstructSignatureSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class MethodSignatureSyntax extends SyntaxNode implements ITypeMemberSyntax {
		public propertyName: ISyntaxToken;
		public questionToken: ISyntaxToken;
		public callSignature: CallSignatureSyntax;
		constructor(propertyName: ISyntaxToken, questionToken: ISyntaxToken, callSignature: CallSignatureSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isTypeMember(): boolean;
		public update(propertyName: ISyntaxToken, questionToken: ISyntaxToken, callSignature: CallSignatureSyntax): MethodSignatureSyntax;
		static create(propertyName: ISyntaxToken, callSignature: CallSignatureSyntax): MethodSignatureSyntax;
		static create1(propertyName: ISyntaxToken): MethodSignatureSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): MethodSignatureSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): MethodSignatureSyntax;
		public withPropertyName(propertyName: ISyntaxToken): MethodSignatureSyntax;
		public withQuestionToken(questionToken: ISyntaxToken): MethodSignatureSyntax;
		public withCallSignature(callSignature: CallSignatureSyntax): MethodSignatureSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class IndexSignatureSyntax extends SyntaxNode implements ITypeMemberSyntax {
		public openBracketToken: ISyntaxToken;
		public parameter: ParameterSyntax;
		public closeBracketToken: ISyntaxToken;
		public typeAnnotation: TypeAnnotationSyntax;
		constructor(openBracketToken: ISyntaxToken, parameter: ParameterSyntax, closeBracketToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isTypeMember(): boolean;
		public update(openBracketToken: ISyntaxToken, parameter: ParameterSyntax, closeBracketToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax): IndexSignatureSyntax;
		static create(openBracketToken: ISyntaxToken, parameter: ParameterSyntax, closeBracketToken: ISyntaxToken): IndexSignatureSyntax;
		static create1(parameter: ParameterSyntax): IndexSignatureSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): IndexSignatureSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): IndexSignatureSyntax;
		public withOpenBracketToken(openBracketToken: ISyntaxToken): IndexSignatureSyntax;
		public withParameter(parameter: ParameterSyntax): IndexSignatureSyntax;
		public withCloseBracketToken(closeBracketToken: ISyntaxToken): IndexSignatureSyntax;
		public withTypeAnnotation(typeAnnotation: TypeAnnotationSyntax): IndexSignatureSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class PropertySignatureSyntax extends SyntaxNode implements ITypeMemberSyntax {
		public propertyName: ISyntaxToken;
		public questionToken: ISyntaxToken;
		public typeAnnotation: TypeAnnotationSyntax;
		constructor(propertyName: ISyntaxToken, questionToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isTypeMember(): boolean;
		public update(propertyName: ISyntaxToken, questionToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax): PropertySignatureSyntax;
		static create(propertyName: ISyntaxToken): PropertySignatureSyntax;
		static create1(propertyName: ISyntaxToken): PropertySignatureSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): PropertySignatureSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): PropertySignatureSyntax;
		public withPropertyName(propertyName: ISyntaxToken): PropertySignatureSyntax;
		public withQuestionToken(questionToken: ISyntaxToken): PropertySignatureSyntax;
		public withTypeAnnotation(typeAnnotation: TypeAnnotationSyntax): PropertySignatureSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class CallSignatureSyntax extends SyntaxNode implements ITypeMemberSyntax {
		public typeParameterList: TypeParameterListSyntax;
		public parameterList: ParameterListSyntax;
		public typeAnnotation: TypeAnnotationSyntax;
		constructor(typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, typeAnnotation: TypeAnnotationSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isTypeMember(): boolean;
		public update(typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, typeAnnotation: TypeAnnotationSyntax): CallSignatureSyntax;
		static create(parameterList: ParameterListSyntax): CallSignatureSyntax;
		static create1(): CallSignatureSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): CallSignatureSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): CallSignatureSyntax;
		public withTypeParameterList(typeParameterList: TypeParameterListSyntax): CallSignatureSyntax;
		public withParameterList(parameterList: ParameterListSyntax): CallSignatureSyntax;
		public withTypeAnnotation(typeAnnotation: TypeAnnotationSyntax): CallSignatureSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class ParameterListSyntax extends SyntaxNode {
		public openParenToken: ISyntaxToken;
		public parameters: ISeparatedSyntaxList;
		public closeParenToken: ISyntaxToken;
		constructor(openParenToken: ISyntaxToken, parameters: ISeparatedSyntaxList, closeParenToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public update(openParenToken: ISyntaxToken, parameters: ISeparatedSyntaxList, closeParenToken: ISyntaxToken): ParameterListSyntax;
		static create(openParenToken: ISyntaxToken, closeParenToken: ISyntaxToken): ParameterListSyntax;
		static create1(): ParameterListSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): ParameterListSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): ParameterListSyntax;
		public withOpenParenToken(openParenToken: ISyntaxToken): ParameterListSyntax;
		public withParameters(parameters: ISeparatedSyntaxList): ParameterListSyntax;
		public withParameter(parameter: ParameterSyntax): ParameterListSyntax;
		public withCloseParenToken(closeParenToken: ISyntaxToken): ParameterListSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class TypeParameterListSyntax extends SyntaxNode {
		public lessThanToken: ISyntaxToken;
		public typeParameters: ISeparatedSyntaxList;
		public greaterThanToken: ISyntaxToken;
		constructor(lessThanToken: ISyntaxToken, typeParameters: ISeparatedSyntaxList, greaterThanToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public update(lessThanToken: ISyntaxToken, typeParameters: ISeparatedSyntaxList, greaterThanToken: ISyntaxToken): TypeParameterListSyntax;
		static create(lessThanToken: ISyntaxToken, greaterThanToken: ISyntaxToken): TypeParameterListSyntax;
		static create1(): TypeParameterListSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): TypeParameterListSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): TypeParameterListSyntax;
		public withLessThanToken(lessThanToken: ISyntaxToken): TypeParameterListSyntax;
		public withTypeParameters(typeParameters: ISeparatedSyntaxList): TypeParameterListSyntax;
		public withTypeParameter(typeParameter: TypeParameterSyntax): TypeParameterListSyntax;
		public withGreaterThanToken(greaterThanToken: ISyntaxToken): TypeParameterListSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class TypeParameterSyntax extends SyntaxNode {
		public identifier: ISyntaxToken;
		public constraint: ConstraintSyntax;
		constructor(identifier: ISyntaxToken, constraint: ConstraintSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public update(identifier: ISyntaxToken, constraint: ConstraintSyntax): TypeParameterSyntax;
		static create(identifier: ISyntaxToken): TypeParameterSyntax;
		static create1(identifier: ISyntaxToken): TypeParameterSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): TypeParameterSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): TypeParameterSyntax;
		public withIdentifier(identifier: ISyntaxToken): TypeParameterSyntax;
		public withConstraint(constraint: ConstraintSyntax): TypeParameterSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class ConstraintSyntax extends SyntaxNode {
		public extendsKeyword: ISyntaxToken;
		public type: ITypeSyntax;
		constructor(extendsKeyword: ISyntaxToken, type: ITypeSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public update(extendsKeyword: ISyntaxToken, type: ITypeSyntax): ConstraintSyntax;
		static create1(type: ITypeSyntax): ConstraintSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): ConstraintSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): ConstraintSyntax;
		public withExtendsKeyword(extendsKeyword: ISyntaxToken): ConstraintSyntax;
		public withType(type: ITypeSyntax): ConstraintSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class ElseClauseSyntax extends SyntaxNode {
		public elseKeyword: ISyntaxToken;
		public statement: IStatementSyntax;
		constructor(elseKeyword: ISyntaxToken, statement: IStatementSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public update(elseKeyword: ISyntaxToken, statement: IStatementSyntax): ElseClauseSyntax;
		static create1(statement: IStatementSyntax): ElseClauseSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): ElseClauseSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): ElseClauseSyntax;
		public withElseKeyword(elseKeyword: ISyntaxToken): ElseClauseSyntax;
		public withStatement(statement: IStatementSyntax): ElseClauseSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class IfStatementSyntax extends SyntaxNode implements IStatementSyntax {
		public ifKeyword: ISyntaxToken;
		public openParenToken: ISyntaxToken;
		public condition: IExpressionSyntax;
		public closeParenToken: ISyntaxToken;
		public statement: IStatementSyntax;
		public elseClause: ElseClauseSyntax;
		constructor(ifKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax, elseClause: ElseClauseSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isStatement(): boolean;
		public isModuleElement(): boolean;
		public update(ifKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax, elseClause: ElseClauseSyntax): IfStatementSyntax;
		static create(ifKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): IfStatementSyntax;
		static create1(condition: IExpressionSyntax, statement: IStatementSyntax): IfStatementSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): IfStatementSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): IfStatementSyntax;
		public withIfKeyword(ifKeyword: ISyntaxToken): IfStatementSyntax;
		public withOpenParenToken(openParenToken: ISyntaxToken): IfStatementSyntax;
		public withCondition(condition: IExpressionSyntax): IfStatementSyntax;
		public withCloseParenToken(closeParenToken: ISyntaxToken): IfStatementSyntax;
		public withStatement(statement: IStatementSyntax): IfStatementSyntax;
		public withElseClause(elseClause: ElseClauseSyntax): IfStatementSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class ExpressionStatementSyntax extends SyntaxNode implements IStatementSyntax {
		public expression: IExpressionSyntax;
		public semicolonToken: ISyntaxToken;
		constructor(expression: IExpressionSyntax, semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isStatement(): boolean;
		public isModuleElement(): boolean;
		public update(expression: IExpressionSyntax, semicolonToken: ISyntaxToken): ExpressionStatementSyntax;
		static create1(expression: IExpressionSyntax): ExpressionStatementSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): ExpressionStatementSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): ExpressionStatementSyntax;
		public withExpression(expression: IExpressionSyntax): ExpressionStatementSyntax;
		public withSemicolonToken(semicolonToken: ISyntaxToken): ExpressionStatementSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class ConstructorDeclarationSyntax extends SyntaxNode implements IClassElementSyntax {
		public modifiers: ISyntaxList;
		public constructorKeyword: ISyntaxToken;
		public parameterList: ParameterListSyntax;
		public block: BlockSyntax;
		public semicolonToken: ISyntaxToken;
		constructor(modifiers: ISyntaxList, constructorKeyword: ISyntaxToken, parameterList: ParameterListSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isClassElement(): boolean;
		public update(modifiers: ISyntaxList, constructorKeyword: ISyntaxToken, parameterList: ParameterListSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken): ConstructorDeclarationSyntax;
		static create(constructorKeyword: ISyntaxToken, parameterList: ParameterListSyntax): ConstructorDeclarationSyntax;
		static create1(): ConstructorDeclarationSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): ConstructorDeclarationSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): ConstructorDeclarationSyntax;
		public withModifiers(modifiers: ISyntaxList): ConstructorDeclarationSyntax;
		public withModifier(modifier: ISyntaxToken): ConstructorDeclarationSyntax;
		public withConstructorKeyword(constructorKeyword: ISyntaxToken): ConstructorDeclarationSyntax;
		public withParameterList(parameterList: ParameterListSyntax): ConstructorDeclarationSyntax;
		public withBlock(block: BlockSyntax): ConstructorDeclarationSyntax;
		public withSemicolonToken(semicolonToken: ISyntaxToken): ConstructorDeclarationSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class MemberFunctionDeclarationSyntax extends SyntaxNode implements IMemberDeclarationSyntax {
		public modifiers: ISyntaxList;
		public propertyName: ISyntaxToken;
		public callSignature: CallSignatureSyntax;
		public block: BlockSyntax;
		public semicolonToken: ISyntaxToken;
		constructor(modifiers: ISyntaxList, propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isMemberDeclaration(): boolean;
		public isClassElement(): boolean;
		public update(modifiers: ISyntaxList, propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken): MemberFunctionDeclarationSyntax;
		static create(propertyName: ISyntaxToken, callSignature: CallSignatureSyntax): MemberFunctionDeclarationSyntax;
		static create1(propertyName: ISyntaxToken): MemberFunctionDeclarationSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): MemberFunctionDeclarationSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): MemberFunctionDeclarationSyntax;
		public withModifiers(modifiers: ISyntaxList): MemberFunctionDeclarationSyntax;
		public withModifier(modifier: ISyntaxToken): MemberFunctionDeclarationSyntax;
		public withPropertyName(propertyName: ISyntaxToken): MemberFunctionDeclarationSyntax;
		public withCallSignature(callSignature: CallSignatureSyntax): MemberFunctionDeclarationSyntax;
		public withBlock(block: BlockSyntax): MemberFunctionDeclarationSyntax;
		public withSemicolonToken(semicolonToken: ISyntaxToken): MemberFunctionDeclarationSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class GetAccessorSyntax extends SyntaxNode implements IMemberDeclarationSyntax, IPropertyAssignmentSyntax {
		public modifiers: ISyntaxList;
		public getKeyword: ISyntaxToken;
		public propertyName: ISyntaxToken;
		public parameterList: ParameterListSyntax;
		public typeAnnotation: TypeAnnotationSyntax;
		public block: BlockSyntax;
		constructor(modifiers: ISyntaxList, getKeyword: ISyntaxToken, propertyName: ISyntaxToken, parameterList: ParameterListSyntax, typeAnnotation: TypeAnnotationSyntax, block: BlockSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isMemberDeclaration(): boolean;
		public isPropertyAssignment(): boolean;
		public isClassElement(): boolean;
		public update(modifiers: ISyntaxList, getKeyword: ISyntaxToken, propertyName: ISyntaxToken, parameterList: ParameterListSyntax, typeAnnotation: TypeAnnotationSyntax, block: BlockSyntax): GetAccessorSyntax;
		static create(getKeyword: ISyntaxToken, propertyName: ISyntaxToken, parameterList: ParameterListSyntax, block: BlockSyntax): GetAccessorSyntax;
		static create1(propertyName: ISyntaxToken): GetAccessorSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): GetAccessorSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): GetAccessorSyntax;
		public withModifiers(modifiers: ISyntaxList): GetAccessorSyntax;
		public withModifier(modifier: ISyntaxToken): GetAccessorSyntax;
		public withGetKeyword(getKeyword: ISyntaxToken): GetAccessorSyntax;
		public withPropertyName(propertyName: ISyntaxToken): GetAccessorSyntax;
		public withParameterList(parameterList: ParameterListSyntax): GetAccessorSyntax;
		public withTypeAnnotation(typeAnnotation: TypeAnnotationSyntax): GetAccessorSyntax;
		public withBlock(block: BlockSyntax): GetAccessorSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class SetAccessorSyntax extends SyntaxNode implements IMemberDeclarationSyntax, IPropertyAssignmentSyntax {
		public modifiers: ISyntaxList;
		public setKeyword: ISyntaxToken;
		public propertyName: ISyntaxToken;
		public parameterList: ParameterListSyntax;
		public block: BlockSyntax;
		constructor(modifiers: ISyntaxList, setKeyword: ISyntaxToken, propertyName: ISyntaxToken, parameterList: ParameterListSyntax, block: BlockSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isMemberDeclaration(): boolean;
		public isPropertyAssignment(): boolean;
		public isClassElement(): boolean;
		public update(modifiers: ISyntaxList, setKeyword: ISyntaxToken, propertyName: ISyntaxToken, parameterList: ParameterListSyntax, block: BlockSyntax): SetAccessorSyntax;
		static create(setKeyword: ISyntaxToken, propertyName: ISyntaxToken, parameterList: ParameterListSyntax, block: BlockSyntax): SetAccessorSyntax;
		static create1(propertyName: ISyntaxToken): SetAccessorSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): SetAccessorSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): SetAccessorSyntax;
		public withModifiers(modifiers: ISyntaxList): SetAccessorSyntax;
		public withModifier(modifier: ISyntaxToken): SetAccessorSyntax;
		public withSetKeyword(setKeyword: ISyntaxToken): SetAccessorSyntax;
		public withPropertyName(propertyName: ISyntaxToken): SetAccessorSyntax;
		public withParameterList(parameterList: ParameterListSyntax): SetAccessorSyntax;
		public withBlock(block: BlockSyntax): SetAccessorSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class MemberVariableDeclarationSyntax extends SyntaxNode implements IMemberDeclarationSyntax {
		public modifiers: ISyntaxList;
		public variableDeclarator: VariableDeclaratorSyntax;
		public semicolonToken: ISyntaxToken;
		constructor(modifiers: ISyntaxList, variableDeclarator: VariableDeclaratorSyntax, semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isMemberDeclaration(): boolean;
		public isClassElement(): boolean;
		public update(modifiers: ISyntaxList, variableDeclarator: VariableDeclaratorSyntax, semicolonToken: ISyntaxToken): MemberVariableDeclarationSyntax;
		static create(variableDeclarator: VariableDeclaratorSyntax, semicolonToken: ISyntaxToken): MemberVariableDeclarationSyntax;
		static create1(variableDeclarator: VariableDeclaratorSyntax): MemberVariableDeclarationSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): MemberVariableDeclarationSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): MemberVariableDeclarationSyntax;
		public withModifiers(modifiers: ISyntaxList): MemberVariableDeclarationSyntax;
		public withModifier(modifier: ISyntaxToken): MemberVariableDeclarationSyntax;
		public withVariableDeclarator(variableDeclarator: VariableDeclaratorSyntax): MemberVariableDeclarationSyntax;
		public withSemicolonToken(semicolonToken: ISyntaxToken): MemberVariableDeclarationSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class IndexMemberDeclarationSyntax extends SyntaxNode implements IClassElementSyntax {
		public modifiers: ISyntaxList;
		public indexSignature: IndexSignatureSyntax;
		public semicolonToken: ISyntaxToken;
		constructor(modifiers: ISyntaxList, indexSignature: IndexSignatureSyntax, semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isClassElement(): boolean;
		public update(modifiers: ISyntaxList, indexSignature: IndexSignatureSyntax, semicolonToken: ISyntaxToken): IndexMemberDeclarationSyntax;
		static create(indexSignature: IndexSignatureSyntax, semicolonToken: ISyntaxToken): IndexMemberDeclarationSyntax;
		static create1(indexSignature: IndexSignatureSyntax): IndexMemberDeclarationSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): IndexMemberDeclarationSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): IndexMemberDeclarationSyntax;
		public withModifiers(modifiers: ISyntaxList): IndexMemberDeclarationSyntax;
		public withModifier(modifier: ISyntaxToken): IndexMemberDeclarationSyntax;
		public withIndexSignature(indexSignature: IndexSignatureSyntax): IndexMemberDeclarationSyntax;
		public withSemicolonToken(semicolonToken: ISyntaxToken): IndexMemberDeclarationSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class ThrowStatementSyntax extends SyntaxNode implements IStatementSyntax {
		public throwKeyword: ISyntaxToken;
		public expression: IExpressionSyntax;
		public semicolonToken: ISyntaxToken;
		constructor(throwKeyword: ISyntaxToken, expression: IExpressionSyntax, semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isStatement(): boolean;
		public isModuleElement(): boolean;
		public update(throwKeyword: ISyntaxToken, expression: IExpressionSyntax, semicolonToken: ISyntaxToken): ThrowStatementSyntax;
		static create1(expression: IExpressionSyntax): ThrowStatementSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): ThrowStatementSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): ThrowStatementSyntax;
		public withThrowKeyword(throwKeyword: ISyntaxToken): ThrowStatementSyntax;
		public withExpression(expression: IExpressionSyntax): ThrowStatementSyntax;
		public withSemicolonToken(semicolonToken: ISyntaxToken): ThrowStatementSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class ReturnStatementSyntax extends SyntaxNode implements IStatementSyntax {
		public returnKeyword: ISyntaxToken;
		public expression: IExpressionSyntax;
		public semicolonToken: ISyntaxToken;
		constructor(returnKeyword: ISyntaxToken, expression: IExpressionSyntax, semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isStatement(): boolean;
		public isModuleElement(): boolean;
		public update(returnKeyword: ISyntaxToken, expression: IExpressionSyntax, semicolonToken: ISyntaxToken): ReturnStatementSyntax;
		static create(returnKeyword: ISyntaxToken, semicolonToken: ISyntaxToken): ReturnStatementSyntax;
		static create1(): ReturnStatementSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): ReturnStatementSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): ReturnStatementSyntax;
		public withReturnKeyword(returnKeyword: ISyntaxToken): ReturnStatementSyntax;
		public withExpression(expression: IExpressionSyntax): ReturnStatementSyntax;
		public withSemicolonToken(semicolonToken: ISyntaxToken): ReturnStatementSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class ObjectCreationExpressionSyntax extends SyntaxNode implements IMemberExpressionSyntax {
		public newKeyword: ISyntaxToken;
		public expression: IMemberExpressionSyntax;
		public argumentList: ArgumentListSyntax;
		constructor(newKeyword: ISyntaxToken, expression: IMemberExpressionSyntax, argumentList: ArgumentListSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isMemberExpression(): boolean;
		public isPostfixExpression(): boolean;
		public isUnaryExpression(): boolean;
		public isExpression(): boolean;
		public update(newKeyword: ISyntaxToken, expression: IMemberExpressionSyntax, argumentList: ArgumentListSyntax): ObjectCreationExpressionSyntax;
		static create(newKeyword: ISyntaxToken, expression: IMemberExpressionSyntax): ObjectCreationExpressionSyntax;
		static create1(expression: IMemberExpressionSyntax): ObjectCreationExpressionSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): ObjectCreationExpressionSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): ObjectCreationExpressionSyntax;
		public withNewKeyword(newKeyword: ISyntaxToken): ObjectCreationExpressionSyntax;
		public withExpression(expression: IMemberExpressionSyntax): ObjectCreationExpressionSyntax;
		public withArgumentList(argumentList: ArgumentListSyntax): ObjectCreationExpressionSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class SwitchStatementSyntax extends SyntaxNode implements IStatementSyntax {
		public switchKeyword: ISyntaxToken;
		public openParenToken: ISyntaxToken;
		public expression: IExpressionSyntax;
		public closeParenToken: ISyntaxToken;
		public openBraceToken: ISyntaxToken;
		public switchClauses: ISyntaxList;
		public closeBraceToken: ISyntaxToken;
		constructor(switchKeyword: ISyntaxToken, openParenToken: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, openBraceToken: ISyntaxToken, switchClauses: ISyntaxList, closeBraceToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isStatement(): boolean;
		public isModuleElement(): boolean;
		public update(switchKeyword: ISyntaxToken, openParenToken: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, openBraceToken: ISyntaxToken, switchClauses: ISyntaxList, closeBraceToken: ISyntaxToken): SwitchStatementSyntax;
		static create(switchKeyword: ISyntaxToken, openParenToken: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, openBraceToken: ISyntaxToken, closeBraceToken: ISyntaxToken): SwitchStatementSyntax;
		static create1(expression: IExpressionSyntax): SwitchStatementSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): SwitchStatementSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): SwitchStatementSyntax;
		public withSwitchKeyword(switchKeyword: ISyntaxToken): SwitchStatementSyntax;
		public withOpenParenToken(openParenToken: ISyntaxToken): SwitchStatementSyntax;
		public withExpression(expression: IExpressionSyntax): SwitchStatementSyntax;
		public withCloseParenToken(closeParenToken: ISyntaxToken): SwitchStatementSyntax;
		public withOpenBraceToken(openBraceToken: ISyntaxToken): SwitchStatementSyntax;
		public withSwitchClauses(switchClauses: ISyntaxList): SwitchStatementSyntax;
		public withSwitchClause(switchClause: ISwitchClauseSyntax): SwitchStatementSyntax;
		public withCloseBraceToken(closeBraceToken: ISyntaxToken): SwitchStatementSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class CaseSwitchClauseSyntax extends SyntaxNode implements ISwitchClauseSyntax {
		public caseKeyword: ISyntaxToken;
		public expression: IExpressionSyntax;
		public colonToken: ISyntaxToken;
		public statements: ISyntaxList;
		constructor(caseKeyword: ISyntaxToken, expression: IExpressionSyntax, colonToken: ISyntaxToken, statements: ISyntaxList, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isSwitchClause(): boolean;
		public update(caseKeyword: ISyntaxToken, expression: IExpressionSyntax, colonToken: ISyntaxToken, statements: ISyntaxList): CaseSwitchClauseSyntax;
		static create(caseKeyword: ISyntaxToken, expression: IExpressionSyntax, colonToken: ISyntaxToken): CaseSwitchClauseSyntax;
		static create1(expression: IExpressionSyntax): CaseSwitchClauseSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): CaseSwitchClauseSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): CaseSwitchClauseSyntax;
		public withCaseKeyword(caseKeyword: ISyntaxToken): CaseSwitchClauseSyntax;
		public withExpression(expression: IExpressionSyntax): CaseSwitchClauseSyntax;
		public withColonToken(colonToken: ISyntaxToken): CaseSwitchClauseSyntax;
		public withStatements(statements: ISyntaxList): CaseSwitchClauseSyntax;
		public withStatement(statement: IStatementSyntax): CaseSwitchClauseSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class DefaultSwitchClauseSyntax extends SyntaxNode implements ISwitchClauseSyntax {
		public defaultKeyword: ISyntaxToken;
		public colonToken: ISyntaxToken;
		public statements: ISyntaxList;
		constructor(defaultKeyword: ISyntaxToken, colonToken: ISyntaxToken, statements: ISyntaxList, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isSwitchClause(): boolean;
		public update(defaultKeyword: ISyntaxToken, colonToken: ISyntaxToken, statements: ISyntaxList): DefaultSwitchClauseSyntax;
		static create(defaultKeyword: ISyntaxToken, colonToken: ISyntaxToken): DefaultSwitchClauseSyntax;
		static create1(): DefaultSwitchClauseSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): DefaultSwitchClauseSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): DefaultSwitchClauseSyntax;
		public withDefaultKeyword(defaultKeyword: ISyntaxToken): DefaultSwitchClauseSyntax;
		public withColonToken(colonToken: ISyntaxToken): DefaultSwitchClauseSyntax;
		public withStatements(statements: ISyntaxList): DefaultSwitchClauseSyntax;
		public withStatement(statement: IStatementSyntax): DefaultSwitchClauseSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class BreakStatementSyntax extends SyntaxNode implements IStatementSyntax {
		public breakKeyword: ISyntaxToken;
		public identifier: ISyntaxToken;
		public semicolonToken: ISyntaxToken;
		constructor(breakKeyword: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isStatement(): boolean;
		public isModuleElement(): boolean;
		public update(breakKeyword: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken): BreakStatementSyntax;
		static create(breakKeyword: ISyntaxToken, semicolonToken: ISyntaxToken): BreakStatementSyntax;
		static create1(): BreakStatementSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): BreakStatementSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): BreakStatementSyntax;
		public withBreakKeyword(breakKeyword: ISyntaxToken): BreakStatementSyntax;
		public withIdentifier(identifier: ISyntaxToken): BreakStatementSyntax;
		public withSemicolonToken(semicolonToken: ISyntaxToken): BreakStatementSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class ContinueStatementSyntax extends SyntaxNode implements IStatementSyntax {
		public continueKeyword: ISyntaxToken;
		public identifier: ISyntaxToken;
		public semicolonToken: ISyntaxToken;
		constructor(continueKeyword: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isStatement(): boolean;
		public isModuleElement(): boolean;
		public update(continueKeyword: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken): ContinueStatementSyntax;
		static create(continueKeyword: ISyntaxToken, semicolonToken: ISyntaxToken): ContinueStatementSyntax;
		static create1(): ContinueStatementSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): ContinueStatementSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): ContinueStatementSyntax;
		public withContinueKeyword(continueKeyword: ISyntaxToken): ContinueStatementSyntax;
		public withIdentifier(identifier: ISyntaxToken): ContinueStatementSyntax;
		public withSemicolonToken(semicolonToken: ISyntaxToken): ContinueStatementSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class ForStatementSyntax extends SyntaxNode implements IIterationStatementSyntax {
		public forKeyword: ISyntaxToken;
		public openParenToken: ISyntaxToken;
		public variableDeclaration: VariableDeclarationSyntax;
		public initializer: IExpressionSyntax;
		public firstSemicolonToken: ISyntaxToken;
		public condition: IExpressionSyntax;
		public secondSemicolonToken: ISyntaxToken;
		public incrementor: IExpressionSyntax;
		public closeParenToken: ISyntaxToken;
		public statement: IStatementSyntax;
		constructor(forKeyword: ISyntaxToken, openParenToken: ISyntaxToken, variableDeclaration: VariableDeclarationSyntax, initializer: IExpressionSyntax, firstSemicolonToken: ISyntaxToken, condition: IExpressionSyntax, secondSemicolonToken: ISyntaxToken, incrementor: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isIterationStatement(): boolean;
		public isStatement(): boolean;
		public isModuleElement(): boolean;
		public update(forKeyword: ISyntaxToken, openParenToken: ISyntaxToken, variableDeclaration: VariableDeclarationSyntax, initializer: IExpressionSyntax, firstSemicolonToken: ISyntaxToken, condition: IExpressionSyntax, secondSemicolonToken: ISyntaxToken, incrementor: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): ForStatementSyntax;
		static create(forKeyword: ISyntaxToken, openParenToken: ISyntaxToken, firstSemicolonToken: ISyntaxToken, secondSemicolonToken: ISyntaxToken, closeParenToken: ISyntaxToken, statement: IStatementSyntax): ForStatementSyntax;
		static create1(statement: IStatementSyntax): ForStatementSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): ForStatementSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): ForStatementSyntax;
		public withForKeyword(forKeyword: ISyntaxToken): ForStatementSyntax;
		public withOpenParenToken(openParenToken: ISyntaxToken): ForStatementSyntax;
		public withVariableDeclaration(variableDeclaration: VariableDeclarationSyntax): ForStatementSyntax;
		public withInitializer(initializer: IExpressionSyntax): ForStatementSyntax;
		public withFirstSemicolonToken(firstSemicolonToken: ISyntaxToken): ForStatementSyntax;
		public withCondition(condition: IExpressionSyntax): ForStatementSyntax;
		public withSecondSemicolonToken(secondSemicolonToken: ISyntaxToken): ForStatementSyntax;
		public withIncrementor(incrementor: IExpressionSyntax): ForStatementSyntax;
		public withCloseParenToken(closeParenToken: ISyntaxToken): ForStatementSyntax;
		public withStatement(statement: IStatementSyntax): ForStatementSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class ForInStatementSyntax extends SyntaxNode implements IIterationStatementSyntax {
		public forKeyword: ISyntaxToken;
		public openParenToken: ISyntaxToken;
		public variableDeclaration: VariableDeclarationSyntax;
		public left: IExpressionSyntax;
		public inKeyword: ISyntaxToken;
		public expression: IExpressionSyntax;
		public closeParenToken: ISyntaxToken;
		public statement: IStatementSyntax;
		constructor(forKeyword: ISyntaxToken, openParenToken: ISyntaxToken, variableDeclaration: VariableDeclarationSyntax, left: IExpressionSyntax, inKeyword: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isIterationStatement(): boolean;
		public isStatement(): boolean;
		public isModuleElement(): boolean;
		public update(forKeyword: ISyntaxToken, openParenToken: ISyntaxToken, variableDeclaration: VariableDeclarationSyntax, left: IExpressionSyntax, inKeyword: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): ForInStatementSyntax;
		static create(forKeyword: ISyntaxToken, openParenToken: ISyntaxToken, inKeyword: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): ForInStatementSyntax;
		static create1(expression: IExpressionSyntax, statement: IStatementSyntax): ForInStatementSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): ForInStatementSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): ForInStatementSyntax;
		public withForKeyword(forKeyword: ISyntaxToken): ForInStatementSyntax;
		public withOpenParenToken(openParenToken: ISyntaxToken): ForInStatementSyntax;
		public withVariableDeclaration(variableDeclaration: VariableDeclarationSyntax): ForInStatementSyntax;
		public withLeft(left: IExpressionSyntax): ForInStatementSyntax;
		public withInKeyword(inKeyword: ISyntaxToken): ForInStatementSyntax;
		public withExpression(expression: IExpressionSyntax): ForInStatementSyntax;
		public withCloseParenToken(closeParenToken: ISyntaxToken): ForInStatementSyntax;
		public withStatement(statement: IStatementSyntax): ForInStatementSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class WhileStatementSyntax extends SyntaxNode implements IIterationStatementSyntax {
		public whileKeyword: ISyntaxToken;
		public openParenToken: ISyntaxToken;
		public condition: IExpressionSyntax;
		public closeParenToken: ISyntaxToken;
		public statement: IStatementSyntax;
		constructor(whileKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isIterationStatement(): boolean;
		public isStatement(): boolean;
		public isModuleElement(): boolean;
		public update(whileKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): WhileStatementSyntax;
		static create1(condition: IExpressionSyntax, statement: IStatementSyntax): WhileStatementSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): WhileStatementSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): WhileStatementSyntax;
		public withWhileKeyword(whileKeyword: ISyntaxToken): WhileStatementSyntax;
		public withOpenParenToken(openParenToken: ISyntaxToken): WhileStatementSyntax;
		public withCondition(condition: IExpressionSyntax): WhileStatementSyntax;
		public withCloseParenToken(closeParenToken: ISyntaxToken): WhileStatementSyntax;
		public withStatement(statement: IStatementSyntax): WhileStatementSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class WithStatementSyntax extends SyntaxNode implements IStatementSyntax {
		public withKeyword: ISyntaxToken;
		public openParenToken: ISyntaxToken;
		public condition: IExpressionSyntax;
		public closeParenToken: ISyntaxToken;
		public statement: IStatementSyntax;
		constructor(withKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isStatement(): boolean;
		public isModuleElement(): boolean;
		public update(withKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): WithStatementSyntax;
		static create1(condition: IExpressionSyntax, statement: IStatementSyntax): WithStatementSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): WithStatementSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): WithStatementSyntax;
		public withWithKeyword(withKeyword: ISyntaxToken): WithStatementSyntax;
		public withOpenParenToken(openParenToken: ISyntaxToken): WithStatementSyntax;
		public withCondition(condition: IExpressionSyntax): WithStatementSyntax;
		public withCloseParenToken(closeParenToken: ISyntaxToken): WithStatementSyntax;
		public withStatement(statement: IStatementSyntax): WithStatementSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class EnumDeclarationSyntax extends SyntaxNode implements IModuleElementSyntax {
		public modifiers: ISyntaxList;
		public enumKeyword: ISyntaxToken;
		public identifier: ISyntaxToken;
		public openBraceToken: ISyntaxToken;
		public enumElements: ISeparatedSyntaxList;
		public closeBraceToken: ISyntaxToken;
		constructor(modifiers: ISyntaxList, enumKeyword: ISyntaxToken, identifier: ISyntaxToken, openBraceToken: ISyntaxToken, enumElements: ISeparatedSyntaxList, closeBraceToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isModuleElement(): boolean;
		public update(modifiers: ISyntaxList, enumKeyword: ISyntaxToken, identifier: ISyntaxToken, openBraceToken: ISyntaxToken, enumElements: ISeparatedSyntaxList, closeBraceToken: ISyntaxToken): EnumDeclarationSyntax;
		static create(enumKeyword: ISyntaxToken, identifier: ISyntaxToken, openBraceToken: ISyntaxToken, closeBraceToken: ISyntaxToken): EnumDeclarationSyntax;
		static create1(identifier: ISyntaxToken): EnumDeclarationSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): EnumDeclarationSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): EnumDeclarationSyntax;
		public withModifiers(modifiers: ISyntaxList): EnumDeclarationSyntax;
		public withModifier(modifier: ISyntaxToken): EnumDeclarationSyntax;
		public withEnumKeyword(enumKeyword: ISyntaxToken): EnumDeclarationSyntax;
		public withIdentifier(identifier: ISyntaxToken): EnumDeclarationSyntax;
		public withOpenBraceToken(openBraceToken: ISyntaxToken): EnumDeclarationSyntax;
		public withEnumElements(enumElements: ISeparatedSyntaxList): EnumDeclarationSyntax;
		public withEnumElement(enumElement: EnumElementSyntax): EnumDeclarationSyntax;
		public withCloseBraceToken(closeBraceToken: ISyntaxToken): EnumDeclarationSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class EnumElementSyntax extends SyntaxNode {
		public propertyName: ISyntaxToken;
		public equalsValueClause: EqualsValueClauseSyntax;
		constructor(propertyName: ISyntaxToken, equalsValueClause: EqualsValueClauseSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public update(propertyName: ISyntaxToken, equalsValueClause: EqualsValueClauseSyntax): EnumElementSyntax;
		static create(propertyName: ISyntaxToken): EnumElementSyntax;
		static create1(propertyName: ISyntaxToken): EnumElementSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): EnumElementSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): EnumElementSyntax;
		public withPropertyName(propertyName: ISyntaxToken): EnumElementSyntax;
		public withEqualsValueClause(equalsValueClause: EqualsValueClauseSyntax): EnumElementSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class CastExpressionSyntax extends SyntaxNode implements IUnaryExpressionSyntax {
		public lessThanToken: ISyntaxToken;
		public type: ITypeSyntax;
		public greaterThanToken: ISyntaxToken;
		public expression: IUnaryExpressionSyntax;
		constructor(lessThanToken: ISyntaxToken, type: ITypeSyntax, greaterThanToken: ISyntaxToken, expression: IUnaryExpressionSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isUnaryExpression(): boolean;
		public isExpression(): boolean;
		public update(lessThanToken: ISyntaxToken, type: ITypeSyntax, greaterThanToken: ISyntaxToken, expression: IUnaryExpressionSyntax): CastExpressionSyntax;
		static create1(type: ITypeSyntax, expression: IUnaryExpressionSyntax): CastExpressionSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): CastExpressionSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): CastExpressionSyntax;
		public withLessThanToken(lessThanToken: ISyntaxToken): CastExpressionSyntax;
		public withType(type: ITypeSyntax): CastExpressionSyntax;
		public withGreaterThanToken(greaterThanToken: ISyntaxToken): CastExpressionSyntax;
		public withExpression(expression: IUnaryExpressionSyntax): CastExpressionSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class ObjectLiteralExpressionSyntax extends SyntaxNode implements IPrimaryExpressionSyntax {
		public openBraceToken: ISyntaxToken;
		public propertyAssignments: ISeparatedSyntaxList;
		public closeBraceToken: ISyntaxToken;
		constructor(openBraceToken: ISyntaxToken, propertyAssignments: ISeparatedSyntaxList, closeBraceToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isPrimaryExpression(): boolean;
		public isMemberExpression(): boolean;
		public isPostfixExpression(): boolean;
		public isUnaryExpression(): boolean;
		public isExpression(): boolean;
		public update(openBraceToken: ISyntaxToken, propertyAssignments: ISeparatedSyntaxList, closeBraceToken: ISyntaxToken): ObjectLiteralExpressionSyntax;
		static create(openBraceToken: ISyntaxToken, closeBraceToken: ISyntaxToken): ObjectLiteralExpressionSyntax;
		static create1(): ObjectLiteralExpressionSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): ObjectLiteralExpressionSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): ObjectLiteralExpressionSyntax;
		public withOpenBraceToken(openBraceToken: ISyntaxToken): ObjectLiteralExpressionSyntax;
		public withPropertyAssignments(propertyAssignments: ISeparatedSyntaxList): ObjectLiteralExpressionSyntax;
		public withPropertyAssignment(propertyAssignment: IPropertyAssignmentSyntax): ObjectLiteralExpressionSyntax;
		public withCloseBraceToken(closeBraceToken: ISyntaxToken): ObjectLiteralExpressionSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class SimplePropertyAssignmentSyntax extends SyntaxNode implements IPropertyAssignmentSyntax {
		public propertyName: ISyntaxToken;
		public colonToken: ISyntaxToken;
		public expression: IExpressionSyntax;
		constructor(propertyName: ISyntaxToken, colonToken: ISyntaxToken, expression: IExpressionSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isPropertyAssignment(): boolean;
		public update(propertyName: ISyntaxToken, colonToken: ISyntaxToken, expression: IExpressionSyntax): SimplePropertyAssignmentSyntax;
		static create1(propertyName: ISyntaxToken, expression: IExpressionSyntax): SimplePropertyAssignmentSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): SimplePropertyAssignmentSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): SimplePropertyAssignmentSyntax;
		public withPropertyName(propertyName: ISyntaxToken): SimplePropertyAssignmentSyntax;
		public withColonToken(colonToken: ISyntaxToken): SimplePropertyAssignmentSyntax;
		public withExpression(expression: IExpressionSyntax): SimplePropertyAssignmentSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class FunctionPropertyAssignmentSyntax extends SyntaxNode implements IPropertyAssignmentSyntax {
		public propertyName: ISyntaxToken;
		public callSignature: CallSignatureSyntax;
		public block: BlockSyntax;
		constructor(propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isPropertyAssignment(): boolean;
		public update(propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax): FunctionPropertyAssignmentSyntax;
		static create1(propertyName: ISyntaxToken): FunctionPropertyAssignmentSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): FunctionPropertyAssignmentSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): FunctionPropertyAssignmentSyntax;
		public withPropertyName(propertyName: ISyntaxToken): FunctionPropertyAssignmentSyntax;
		public withCallSignature(callSignature: CallSignatureSyntax): FunctionPropertyAssignmentSyntax;
		public withBlock(block: BlockSyntax): FunctionPropertyAssignmentSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class FunctionExpressionSyntax extends SyntaxNode implements IPrimaryExpressionSyntax {
		public functionKeyword: ISyntaxToken;
		public identifier: ISyntaxToken;
		public callSignature: CallSignatureSyntax;
		public block: BlockSyntax;
		constructor(functionKeyword: ISyntaxToken, identifier: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isPrimaryExpression(): boolean;
		public isMemberExpression(): boolean;
		public isPostfixExpression(): boolean;
		public isUnaryExpression(): boolean;
		public isExpression(): boolean;
		public update(functionKeyword: ISyntaxToken, identifier: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax): FunctionExpressionSyntax;
		static create(functionKeyword: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax): FunctionExpressionSyntax;
		static create1(): FunctionExpressionSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): FunctionExpressionSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): FunctionExpressionSyntax;
		public withFunctionKeyword(functionKeyword: ISyntaxToken): FunctionExpressionSyntax;
		public withIdentifier(identifier: ISyntaxToken): FunctionExpressionSyntax;
		public withCallSignature(callSignature: CallSignatureSyntax): FunctionExpressionSyntax;
		public withBlock(block: BlockSyntax): FunctionExpressionSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class EmptyStatementSyntax extends SyntaxNode implements IStatementSyntax {
		public semicolonToken: ISyntaxToken;
		constructor(semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isStatement(): boolean;
		public isModuleElement(): boolean;
		public update(semicolonToken: ISyntaxToken): EmptyStatementSyntax;
		static create1(): EmptyStatementSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): EmptyStatementSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): EmptyStatementSyntax;
		public withSemicolonToken(semicolonToken: ISyntaxToken): EmptyStatementSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class TryStatementSyntax extends SyntaxNode implements IStatementSyntax {
		public tryKeyword: ISyntaxToken;
		public block: BlockSyntax;
		public catchClause: CatchClauseSyntax;
		public finallyClause: FinallyClauseSyntax;
		constructor(tryKeyword: ISyntaxToken, block: BlockSyntax, catchClause: CatchClauseSyntax, finallyClause: FinallyClauseSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isStatement(): boolean;
		public isModuleElement(): boolean;
		public update(tryKeyword: ISyntaxToken, block: BlockSyntax, catchClause: CatchClauseSyntax, finallyClause: FinallyClauseSyntax): TryStatementSyntax;
		static create(tryKeyword: ISyntaxToken, block: BlockSyntax): TryStatementSyntax;
		static create1(): TryStatementSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): TryStatementSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): TryStatementSyntax;
		public withTryKeyword(tryKeyword: ISyntaxToken): TryStatementSyntax;
		public withBlock(block: BlockSyntax): TryStatementSyntax;
		public withCatchClause(catchClause: CatchClauseSyntax): TryStatementSyntax;
		public withFinallyClause(finallyClause: FinallyClauseSyntax): TryStatementSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class CatchClauseSyntax extends SyntaxNode {
		public catchKeyword: ISyntaxToken;
		public openParenToken: ISyntaxToken;
		public identifier: ISyntaxToken;
		public typeAnnotation: TypeAnnotationSyntax;
		public closeParenToken: ISyntaxToken;
		public block: BlockSyntax;
		constructor(catchKeyword: ISyntaxToken, openParenToken: ISyntaxToken, identifier: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, closeParenToken: ISyntaxToken, block: BlockSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public update(catchKeyword: ISyntaxToken, openParenToken: ISyntaxToken, identifier: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, closeParenToken: ISyntaxToken, block: BlockSyntax): CatchClauseSyntax;
		static create(catchKeyword: ISyntaxToken, openParenToken: ISyntaxToken, identifier: ISyntaxToken, closeParenToken: ISyntaxToken, block: BlockSyntax): CatchClauseSyntax;
		static create1(identifier: ISyntaxToken): CatchClauseSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): CatchClauseSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): CatchClauseSyntax;
		public withCatchKeyword(catchKeyword: ISyntaxToken): CatchClauseSyntax;
		public withOpenParenToken(openParenToken: ISyntaxToken): CatchClauseSyntax;
		public withIdentifier(identifier: ISyntaxToken): CatchClauseSyntax;
		public withTypeAnnotation(typeAnnotation: TypeAnnotationSyntax): CatchClauseSyntax;
		public withCloseParenToken(closeParenToken: ISyntaxToken): CatchClauseSyntax;
		public withBlock(block: BlockSyntax): CatchClauseSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class FinallyClauseSyntax extends SyntaxNode {
		public finallyKeyword: ISyntaxToken;
		public block: BlockSyntax;
		constructor(finallyKeyword: ISyntaxToken, block: BlockSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public update(finallyKeyword: ISyntaxToken, block: BlockSyntax): FinallyClauseSyntax;
		static create1(): FinallyClauseSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): FinallyClauseSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): FinallyClauseSyntax;
		public withFinallyKeyword(finallyKeyword: ISyntaxToken): FinallyClauseSyntax;
		public withBlock(block: BlockSyntax): FinallyClauseSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class LabeledStatementSyntax extends SyntaxNode implements IStatementSyntax {
		public identifier: ISyntaxToken;
		public colonToken: ISyntaxToken;
		public statement: IStatementSyntax;
		constructor(identifier: ISyntaxToken, colonToken: ISyntaxToken, statement: IStatementSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isStatement(): boolean;
		public isModuleElement(): boolean;
		public update(identifier: ISyntaxToken, colonToken: ISyntaxToken, statement: IStatementSyntax): LabeledStatementSyntax;
		static create1(identifier: ISyntaxToken, statement: IStatementSyntax): LabeledStatementSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): LabeledStatementSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): LabeledStatementSyntax;
		public withIdentifier(identifier: ISyntaxToken): LabeledStatementSyntax;
		public withColonToken(colonToken: ISyntaxToken): LabeledStatementSyntax;
		public withStatement(statement: IStatementSyntax): LabeledStatementSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class DoStatementSyntax extends SyntaxNode implements IIterationStatementSyntax {
		public doKeyword: ISyntaxToken;
		public statement: IStatementSyntax;
		public whileKeyword: ISyntaxToken;
		public openParenToken: ISyntaxToken;
		public condition: IExpressionSyntax;
		public closeParenToken: ISyntaxToken;
		public semicolonToken: ISyntaxToken;
		constructor(doKeyword: ISyntaxToken, statement: IStatementSyntax, whileKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isIterationStatement(): boolean;
		public isStatement(): boolean;
		public isModuleElement(): boolean;
		public update(doKeyword: ISyntaxToken, statement: IStatementSyntax, whileKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, semicolonToken: ISyntaxToken): DoStatementSyntax;
		static create1(statement: IStatementSyntax, condition: IExpressionSyntax): DoStatementSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): DoStatementSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): DoStatementSyntax;
		public withDoKeyword(doKeyword: ISyntaxToken): DoStatementSyntax;
		public withStatement(statement: IStatementSyntax): DoStatementSyntax;
		public withWhileKeyword(whileKeyword: ISyntaxToken): DoStatementSyntax;
		public withOpenParenToken(openParenToken: ISyntaxToken): DoStatementSyntax;
		public withCondition(condition: IExpressionSyntax): DoStatementSyntax;
		public withCloseParenToken(closeParenToken: ISyntaxToken): DoStatementSyntax;
		public withSemicolonToken(semicolonToken: ISyntaxToken): DoStatementSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class TypeOfExpressionSyntax extends SyntaxNode implements IUnaryExpressionSyntax {
		public typeOfKeyword: ISyntaxToken;
		public expression: IUnaryExpressionSyntax;
		constructor(typeOfKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isUnaryExpression(): boolean;
		public isExpression(): boolean;
		public update(typeOfKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax): TypeOfExpressionSyntax;
		static create1(expression: IUnaryExpressionSyntax): TypeOfExpressionSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): TypeOfExpressionSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): TypeOfExpressionSyntax;
		public withTypeOfKeyword(typeOfKeyword: ISyntaxToken): TypeOfExpressionSyntax;
		public withExpression(expression: IUnaryExpressionSyntax): TypeOfExpressionSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class DeleteExpressionSyntax extends SyntaxNode implements IUnaryExpressionSyntax {
		public deleteKeyword: ISyntaxToken;
		public expression: IUnaryExpressionSyntax;
		constructor(deleteKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isUnaryExpression(): boolean;
		public isExpression(): boolean;
		public update(deleteKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax): DeleteExpressionSyntax;
		static create1(expression: IUnaryExpressionSyntax): DeleteExpressionSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): DeleteExpressionSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): DeleteExpressionSyntax;
		public withDeleteKeyword(deleteKeyword: ISyntaxToken): DeleteExpressionSyntax;
		public withExpression(expression: IUnaryExpressionSyntax): DeleteExpressionSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class VoidExpressionSyntax extends SyntaxNode implements IUnaryExpressionSyntax {
		public voidKeyword: ISyntaxToken;
		public expression: IUnaryExpressionSyntax;
		constructor(voidKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isUnaryExpression(): boolean;
		public isExpression(): boolean;
		public update(voidKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax): VoidExpressionSyntax;
		static create1(expression: IUnaryExpressionSyntax): VoidExpressionSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): VoidExpressionSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): VoidExpressionSyntax;
		public withVoidKeyword(voidKeyword: ISyntaxToken): VoidExpressionSyntax;
		public withExpression(expression: IUnaryExpressionSyntax): VoidExpressionSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class DebuggerStatementSyntax extends SyntaxNode implements IStatementSyntax {
		public debuggerKeyword: ISyntaxToken;
		public semicolonToken: ISyntaxToken;
		constructor(debuggerKeyword: ISyntaxToken, semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
		public accept(visitor: ISyntaxVisitor): any;
		public kind(): SyntaxKind;
		public childCount(): number;
		public childAt(slot: number): ISyntaxElement;
		public isStatement(): boolean;
		public isModuleElement(): boolean;
		public update(debuggerKeyword: ISyntaxToken, semicolonToken: ISyntaxToken): DebuggerStatementSyntax;
		static create1(): DebuggerStatementSyntax;
		public withLeadingTrivia(trivia: ISyntaxTriviaList): DebuggerStatementSyntax;
		public withTrailingTrivia(trivia: ISyntaxTriviaList): DebuggerStatementSyntax;
		public withDebuggerKeyword(debuggerKeyword: ISyntaxToken): DebuggerStatementSyntax;
		public withSemicolonToken(semicolonToken: ISyntaxToken): DebuggerStatementSyntax;
		public isTypeScriptSpecific(): boolean;
	}
	class SyntaxRewriter implements ISyntaxVisitor {
		public visitToken(token: ISyntaxToken): ISyntaxToken;
		public visitNode(node: SyntaxNode): SyntaxNode;
		public visitNodeOrToken(node: ISyntaxNodeOrToken): ISyntaxNodeOrToken;
		public visitList(list: ISyntaxList): ISyntaxList;
		public visitSeparatedList(list: ISeparatedSyntaxList): ISeparatedSyntaxList;
		public visitSourceUnit(node: SourceUnitSyntax): any;
		public visitExternalModuleReference(node: ExternalModuleReferenceSyntax): any;
		public visitModuleNameModuleReference(node: ModuleNameModuleReferenceSyntax): any;
		public visitImportDeclaration(node: ImportDeclarationSyntax): any;
		public visitExportAssignment(node: ExportAssignmentSyntax): any;
		public visitClassDeclaration(node: ClassDeclarationSyntax): any;
		public visitInterfaceDeclaration(node: InterfaceDeclarationSyntax): any;
		public visitHeritageClause(node: HeritageClauseSyntax): any;
		public visitModuleDeclaration(node: ModuleDeclarationSyntax): any;
		public visitFunctionDeclaration(node: FunctionDeclarationSyntax): any;
		public visitVariableStatement(node: VariableStatementSyntax): any;
		public visitVariableDeclaration(node: VariableDeclarationSyntax): any;
		public visitVariableDeclarator(node: VariableDeclaratorSyntax): any;
		public visitEqualsValueClause(node: EqualsValueClauseSyntax): any;
		public visitPrefixUnaryExpression(node: PrefixUnaryExpressionSyntax): any;
		public visitArrayLiteralExpression(node: ArrayLiteralExpressionSyntax): any;
		public visitOmittedExpression(node: OmittedExpressionSyntax): any;
		public visitParenthesizedExpression(node: ParenthesizedExpressionSyntax): any;
		public visitSimpleArrowFunctionExpression(node: SimpleArrowFunctionExpressionSyntax): any;
		public visitParenthesizedArrowFunctionExpression(node: ParenthesizedArrowFunctionExpressionSyntax): any;
		public visitQualifiedName(node: QualifiedNameSyntax): any;
		public visitTypeArgumentList(node: TypeArgumentListSyntax): any;
		public visitConstructorType(node: ConstructorTypeSyntax): any;
		public visitFunctionType(node: FunctionTypeSyntax): any;
		public visitObjectType(node: ObjectTypeSyntax): any;
		public visitArrayType(node: ArrayTypeSyntax): any;
		public visitGenericType(node: GenericTypeSyntax): any;
		public visitTypeQuery(node: TypeQuerySyntax): any;
		public visitTypeAnnotation(node: TypeAnnotationSyntax): any;
		public visitBlock(node: BlockSyntax): any;
		public visitParameter(node: ParameterSyntax): any;
		public visitMemberAccessExpression(node: MemberAccessExpressionSyntax): any;
		public visitPostfixUnaryExpression(node: PostfixUnaryExpressionSyntax): any;
		public visitElementAccessExpression(node: ElementAccessExpressionSyntax): any;
		public visitInvocationExpression(node: InvocationExpressionSyntax): any;
		public visitArgumentList(node: ArgumentListSyntax): any;
		public visitBinaryExpression(node: BinaryExpressionSyntax): any;
		public visitConditionalExpression(node: ConditionalExpressionSyntax): any;
		public visitConstructSignature(node: ConstructSignatureSyntax): any;
		public visitMethodSignature(node: MethodSignatureSyntax): any;
		public visitIndexSignature(node: IndexSignatureSyntax): any;
		public visitPropertySignature(node: PropertySignatureSyntax): any;
		public visitCallSignature(node: CallSignatureSyntax): any;
		public visitParameterList(node: ParameterListSyntax): any;
		public visitTypeParameterList(node: TypeParameterListSyntax): any;
		public visitTypeParameter(node: TypeParameterSyntax): any;
		public visitConstraint(node: ConstraintSyntax): any;
		public visitElseClause(node: ElseClauseSyntax): any;
		public visitIfStatement(node: IfStatementSyntax): any;
		public visitExpressionStatement(node: ExpressionStatementSyntax): any;
		public visitConstructorDeclaration(node: ConstructorDeclarationSyntax): any;
		public visitMemberFunctionDeclaration(node: MemberFunctionDeclarationSyntax): any;
		public visitGetAccessor(node: GetAccessorSyntax): any;
		public visitSetAccessor(node: SetAccessorSyntax): any;
		public visitMemberVariableDeclaration(node: MemberVariableDeclarationSyntax): any;
		public visitIndexMemberDeclaration(node: IndexMemberDeclarationSyntax): any;
		public visitThrowStatement(node: ThrowStatementSyntax): any;
		public visitReturnStatement(node: ReturnStatementSyntax): any;
		public visitObjectCreationExpression(node: ObjectCreationExpressionSyntax): any;
		public visitSwitchStatement(node: SwitchStatementSyntax): any;
		public visitCaseSwitchClause(node: CaseSwitchClauseSyntax): any;
		public visitDefaultSwitchClause(node: DefaultSwitchClauseSyntax): any;
		public visitBreakStatement(node: BreakStatementSyntax): any;
		public visitContinueStatement(node: ContinueStatementSyntax): any;
		public visitForStatement(node: ForStatementSyntax): any;
		public visitForInStatement(node: ForInStatementSyntax): any;
		public visitWhileStatement(node: WhileStatementSyntax): any;
		public visitWithStatement(node: WithStatementSyntax): any;
		public visitEnumDeclaration(node: EnumDeclarationSyntax): any;
		public visitEnumElement(node: EnumElementSyntax): any;
		public visitCastExpression(node: CastExpressionSyntax): any;
		public visitObjectLiteralExpression(node: ObjectLiteralExpressionSyntax): any;
		public visitSimplePropertyAssignment(node: SimplePropertyAssignmentSyntax): any;
		public visitFunctionPropertyAssignment(node: FunctionPropertyAssignmentSyntax): any;
		public visitFunctionExpression(node: FunctionExpressionSyntax): any;
		public visitEmptyStatement(node: EmptyStatementSyntax): any;
		public visitTryStatement(node: TryStatementSyntax): any;
		public visitCatchClause(node: CatchClauseSyntax): any;
		public visitFinallyClause(node: FinallyClauseSyntax): any;
		public visitLabeledStatement(node: LabeledStatementSyntax): any;
		public visitDoStatement(node: DoStatementSyntax): any;
		public visitTypeOfExpression(node: TypeOfExpressionSyntax): any;
		public visitDeleteExpression(node: DeleteExpressionSyntax): any;
		public visitVoidExpression(node: VoidExpressionSyntax): any;
		public visitDebuggerStatement(node: DebuggerStatementSyntax): any;
	}
	class SyntaxDedenter extends SyntaxRewriter {
		private dedentationAmount;
		private minimumIndent;
		private options;
		private lastTriviaWasNewLine;
		constructor(dedentFirstToken: boolean, dedentationAmount: number, minimumIndent: number, options: FormattingOptions);
		private abort();
		private isAborted();
		public visitToken(token: ISyntaxToken): ISyntaxToken;
		private dedentTriviaList(triviaList);
		private dedentSegment(segment, hasFollowingNewLineTrivia);
		private dedentWhitespace(trivia, hasFollowingNewLineTrivia);
		private dedentMultiLineComment(trivia);
		static dedentNode(node: ISyntaxNode, dedentFirstToken: boolean, dedentAmount: number, minimumIndent: number, options: FormattingOptions): ISyntaxNode;
	}
	class SyntaxIndenter extends SyntaxRewriter {
		private indentationAmount;
		private options;
		private lastTriviaWasNewLine;
		private indentationTrivia;
		constructor(indentFirstToken: boolean, indentationAmount: number, options: FormattingOptions);
		public visitToken(token: ISyntaxToken): ISyntaxToken;
		public indentTriviaList(triviaList: ISyntaxTriviaList): ISyntaxTriviaList;
		private indentSegment(segment);
		private indentWhitespace(trivia, indentThisTrivia, result);
		private indentSingleLineOrSkippedText(trivia, indentThisTrivia, result);
		private indentMultiLineComment(trivia, indentThisTrivia, result);
		static indentNode(node: ISyntaxNode, indentFirstToken: boolean, indentAmount: number, options: FormattingOptions): SyntaxNode;
		static indentNodes(nodes: SyntaxNode[], indentFirstToken: boolean, indentAmount: number, options: FormattingOptions): SyntaxNode[];
	}
	interface ISyntaxToken extends ISyntaxNodeOrToken, INameSyntax, IPrimaryExpressionSyntax {
		tokenKind: SyntaxKind;
		text(): string;
		value(): any;
		valueText(): string;
		hasLeadingTrivia(): boolean;
		hasLeadingComment(): boolean;
		hasLeadingNewLine(): boolean;
		hasLeadingSkippedText(): boolean;
		hasTrailingTrivia(): boolean;
		hasTrailingComment(): boolean;
		hasTrailingNewLine(): boolean;
		hasTrailingSkippedText(): boolean;
		hasSkippedToken(): boolean;
		leadingTrivia(): ISyntaxTriviaList;
		trailingTrivia(): ISyntaxTriviaList;
		withLeadingTrivia(leadingTrivia: ISyntaxTriviaList): ISyntaxToken;
		withTrailingTrivia(trailingTrivia: ISyntaxTriviaList): ISyntaxToken;
		clone(): ISyntaxToken;
	}
	interface ITokenInfo {
		leadingTrivia?: ISyntaxTrivia[];
		text?: string;
		trailingTrivia?: ISyntaxTrivia[];
	}
	class SyntaxTokenReplacer extends SyntaxRewriter {
		private token1;
		private token2;
		constructor(token1: ISyntaxToken, token2: ISyntaxToken);
		public visitToken(token: ISyntaxToken): ISyntaxToken;
		public visitNode(node: SyntaxNode): SyntaxNode;
		public visitList(list: ISyntaxList): ISyntaxList;
		public visitSeparatedList(list: ISeparatedSyntaxList): ISeparatedSyntaxList;
	}
	interface ISyntaxTrivia {
		kind(): SyntaxKind;
		isWhitespace(): boolean;
		isComment(): boolean;
		isNewLine(): boolean;
		isSkippedToken(): boolean;
		fullWidth(): number;
		fullText(): string;
		skippedToken(): ISyntaxToken;
	}
	interface ISyntaxTriviaList {
		count(): number;
		syntaxTriviaAt(index: number): ISyntaxTrivia;
		fullWidth(): number;
		fullText(): string;
		hasComment(): boolean;
		hasNewLine(): boolean;
		hasSkippedToken(): boolean;
		last(): ISyntaxTrivia;
		toArray(): ISyntaxTrivia[];
		concat(trivia: ISyntaxTriviaList): ISyntaxTriviaList;
		collectTextElements(elements: string[]): void;
	}
	class SyntaxUtilities {
		static isAngleBracket(positionedElement: PositionedElement): boolean;
		static getToken(list: ISyntaxList, kind: SyntaxKind): ISyntaxToken;
		static containsToken(list: ISyntaxList, kind: SyntaxKind): boolean;
		static hasExportKeyword(moduleElement: IModuleElementSyntax): boolean;
		static getExportKeyword(moduleElement: IModuleElementSyntax): ISyntaxToken;
		static isAmbientDeclarationSyntax(positionNode: PositionedNode): boolean;
	}
	interface ISyntaxVisitor {
		visitToken(token: ISyntaxToken): any;
		visitSourceUnit(node: SourceUnitSyntax): any;
		visitExternalModuleReference(node: ExternalModuleReferenceSyntax): any;
		visitModuleNameModuleReference(node: ModuleNameModuleReferenceSyntax): any;
		visitImportDeclaration(node: ImportDeclarationSyntax): any;
		visitExportAssignment(node: ExportAssignmentSyntax): any;
		visitClassDeclaration(node: ClassDeclarationSyntax): any;
		visitInterfaceDeclaration(node: InterfaceDeclarationSyntax): any;
		visitHeritageClause(node: HeritageClauseSyntax): any;
		visitModuleDeclaration(node: ModuleDeclarationSyntax): any;
		visitFunctionDeclaration(node: FunctionDeclarationSyntax): any;
		visitVariableStatement(node: VariableStatementSyntax): any;
		visitVariableDeclaration(node: VariableDeclarationSyntax): any;
		visitVariableDeclarator(node: VariableDeclaratorSyntax): any;
		visitEqualsValueClause(node: EqualsValueClauseSyntax): any;
		visitPrefixUnaryExpression(node: PrefixUnaryExpressionSyntax): any;
		visitArrayLiteralExpression(node: ArrayLiteralExpressionSyntax): any;
		visitOmittedExpression(node: OmittedExpressionSyntax): any;
		visitParenthesizedExpression(node: ParenthesizedExpressionSyntax): any;
		visitSimpleArrowFunctionExpression(node: SimpleArrowFunctionExpressionSyntax): any;
		visitParenthesizedArrowFunctionExpression(node: ParenthesizedArrowFunctionExpressionSyntax): any;
		visitQualifiedName(node: QualifiedNameSyntax): any;
		visitTypeArgumentList(node: TypeArgumentListSyntax): any;
		visitConstructorType(node: ConstructorTypeSyntax): any;
		visitFunctionType(node: FunctionTypeSyntax): any;
		visitObjectType(node: ObjectTypeSyntax): any;
		visitArrayType(node: ArrayTypeSyntax): any;
		visitGenericType(node: GenericTypeSyntax): any;
		visitTypeQuery(node: TypeQuerySyntax): any;
		visitTypeAnnotation(node: TypeAnnotationSyntax): any;
		visitBlock(node: BlockSyntax): any;
		visitParameter(node: ParameterSyntax): any;
		visitMemberAccessExpression(node: MemberAccessExpressionSyntax): any;
		visitPostfixUnaryExpression(node: PostfixUnaryExpressionSyntax): any;
		visitElementAccessExpression(node: ElementAccessExpressionSyntax): any;
		visitInvocationExpression(node: InvocationExpressionSyntax): any;
		visitArgumentList(node: ArgumentListSyntax): any;
		visitBinaryExpression(node: BinaryExpressionSyntax): any;
		visitConditionalExpression(node: ConditionalExpressionSyntax): any;
		visitConstructSignature(node: ConstructSignatureSyntax): any;
		visitMethodSignature(node: MethodSignatureSyntax): any;
		visitIndexSignature(node: IndexSignatureSyntax): any;
		visitPropertySignature(node: PropertySignatureSyntax): any;
		visitCallSignature(node: CallSignatureSyntax): any;
		visitParameterList(node: ParameterListSyntax): any;
		visitTypeParameterList(node: TypeParameterListSyntax): any;
		visitTypeParameter(node: TypeParameterSyntax): any;
		visitConstraint(node: ConstraintSyntax): any;
		visitElseClause(node: ElseClauseSyntax): any;
		visitIfStatement(node: IfStatementSyntax): any;
		visitExpressionStatement(node: ExpressionStatementSyntax): any;
		visitConstructorDeclaration(node: ConstructorDeclarationSyntax): any;
		visitMemberFunctionDeclaration(node: MemberFunctionDeclarationSyntax): any;
		visitGetAccessor(node: GetAccessorSyntax): any;
		visitSetAccessor(node: SetAccessorSyntax): any;
		visitMemberVariableDeclaration(node: MemberVariableDeclarationSyntax): any;
		visitIndexMemberDeclaration(node: IndexMemberDeclarationSyntax): any;
		visitThrowStatement(node: ThrowStatementSyntax): any;
		visitReturnStatement(node: ReturnStatementSyntax): any;
		visitObjectCreationExpression(node: ObjectCreationExpressionSyntax): any;
		visitSwitchStatement(node: SwitchStatementSyntax): any;
		visitCaseSwitchClause(node: CaseSwitchClauseSyntax): any;
		visitDefaultSwitchClause(node: DefaultSwitchClauseSyntax): any;
		visitBreakStatement(node: BreakStatementSyntax): any;
		visitContinueStatement(node: ContinueStatementSyntax): any;
		visitForStatement(node: ForStatementSyntax): any;
		visitForInStatement(node: ForInStatementSyntax): any;
		visitWhileStatement(node: WhileStatementSyntax): any;
		visitWithStatement(node: WithStatementSyntax): any;
		visitEnumDeclaration(node: EnumDeclarationSyntax): any;
		visitEnumElement(node: EnumElementSyntax): any;
		visitCastExpression(node: CastExpressionSyntax): any;
		visitObjectLiteralExpression(node: ObjectLiteralExpressionSyntax): any;
		visitSimplePropertyAssignment(node: SimplePropertyAssignmentSyntax): any;
		visitFunctionPropertyAssignment(node: FunctionPropertyAssignmentSyntax): any;
		visitFunctionExpression(node: FunctionExpressionSyntax): any;
		visitEmptyStatement(node: EmptyStatementSyntax): any;
		visitTryStatement(node: TryStatementSyntax): any;
		visitCatchClause(node: CatchClauseSyntax): any;
		visitFinallyClause(node: FinallyClauseSyntax): any;
		visitLabeledStatement(node: LabeledStatementSyntax): any;
		visitDoStatement(node: DoStatementSyntax): any;
		visitTypeOfExpression(node: TypeOfExpressionSyntax): any;
		visitDeleteExpression(node: DeleteExpressionSyntax): any;
		visitVoidExpression(node: VoidExpressionSyntax): any;
		visitDebuggerStatement(node: DebuggerStatementSyntax): any;
	}
	class SyntaxVisitor implements ISyntaxVisitor {
		public defaultVisit(node: ISyntaxNodeOrToken): any;
		public visitToken(token: ISyntaxToken): any;
		public visitSourceUnit(node: SourceUnitSyntax): any;
		public visitExternalModuleReference(node: ExternalModuleReferenceSyntax): any;
		public visitModuleNameModuleReference(node: ModuleNameModuleReferenceSyntax): any;
		public visitImportDeclaration(node: ImportDeclarationSyntax): any;
		public visitExportAssignment(node: ExportAssignmentSyntax): any;
		public visitClassDeclaration(node: ClassDeclarationSyntax): any;
		public visitInterfaceDeclaration(node: InterfaceDeclarationSyntax): any;
		public visitHeritageClause(node: HeritageClauseSyntax): any;
		public visitModuleDeclaration(node: ModuleDeclarationSyntax): any;
		public visitFunctionDeclaration(node: FunctionDeclarationSyntax): any;
		public visitVariableStatement(node: VariableStatementSyntax): any;
		public visitVariableDeclaration(node: VariableDeclarationSyntax): any;
		public visitVariableDeclarator(node: VariableDeclaratorSyntax): any;
		public visitEqualsValueClause(node: EqualsValueClauseSyntax): any;
		public visitPrefixUnaryExpression(node: PrefixUnaryExpressionSyntax): any;
		public visitArrayLiteralExpression(node: ArrayLiteralExpressionSyntax): any;
		public visitOmittedExpression(node: OmittedExpressionSyntax): any;
		public visitParenthesizedExpression(node: ParenthesizedExpressionSyntax): any;
		public visitSimpleArrowFunctionExpression(node: SimpleArrowFunctionExpressionSyntax): any;
		public visitParenthesizedArrowFunctionExpression(node: ParenthesizedArrowFunctionExpressionSyntax): any;
		public visitQualifiedName(node: QualifiedNameSyntax): any;
		public visitTypeArgumentList(node: TypeArgumentListSyntax): any;
		public visitConstructorType(node: ConstructorTypeSyntax): any;
		public visitFunctionType(node: FunctionTypeSyntax): any;
		public visitObjectType(node: ObjectTypeSyntax): any;
		public visitArrayType(node: ArrayTypeSyntax): any;
		public visitGenericType(node: GenericTypeSyntax): any;
		public visitTypeQuery(node: TypeQuerySyntax): any;
		public visitTypeAnnotation(node: TypeAnnotationSyntax): any;
		public visitBlock(node: BlockSyntax): any;
		public visitParameter(node: ParameterSyntax): any;
		public visitMemberAccessExpression(node: MemberAccessExpressionSyntax): any;
		public visitPostfixUnaryExpression(node: PostfixUnaryExpressionSyntax): any;
		public visitElementAccessExpression(node: ElementAccessExpressionSyntax): any;
		public visitInvocationExpression(node: InvocationExpressionSyntax): any;
		public visitArgumentList(node: ArgumentListSyntax): any;
		public visitBinaryExpression(node: BinaryExpressionSyntax): any;
		public visitConditionalExpression(node: ConditionalExpressionSyntax): any;
		public visitConstructSignature(node: ConstructSignatureSyntax): any;
		public visitMethodSignature(node: MethodSignatureSyntax): any;
		public visitIndexSignature(node: IndexSignatureSyntax): any;
		public visitPropertySignature(node: PropertySignatureSyntax): any;
		public visitCallSignature(node: CallSignatureSyntax): any;
		public visitParameterList(node: ParameterListSyntax): any;
		public visitTypeParameterList(node: TypeParameterListSyntax): any;
		public visitTypeParameter(node: TypeParameterSyntax): any;
		public visitConstraint(node: ConstraintSyntax): any;
		public visitElseClause(node: ElseClauseSyntax): any;
		public visitIfStatement(node: IfStatementSyntax): any;
		public visitExpressionStatement(node: ExpressionStatementSyntax): any;
		public visitConstructorDeclaration(node: ConstructorDeclarationSyntax): any;
		public visitMemberFunctionDeclaration(node: MemberFunctionDeclarationSyntax): any;
		public visitGetAccessor(node: GetAccessorSyntax): any;
		public visitSetAccessor(node: SetAccessorSyntax): any;
		public visitMemberVariableDeclaration(node: MemberVariableDeclarationSyntax): any;
		public visitIndexMemberDeclaration(node: IndexMemberDeclarationSyntax): any;
		public visitThrowStatement(node: ThrowStatementSyntax): any;
		public visitReturnStatement(node: ReturnStatementSyntax): any;
		public visitObjectCreationExpression(node: ObjectCreationExpressionSyntax): any;
		public visitSwitchStatement(node: SwitchStatementSyntax): any;
		public visitCaseSwitchClause(node: CaseSwitchClauseSyntax): any;
		public visitDefaultSwitchClause(node: DefaultSwitchClauseSyntax): any;
		public visitBreakStatement(node: BreakStatementSyntax): any;
		public visitContinueStatement(node: ContinueStatementSyntax): any;
		public visitForStatement(node: ForStatementSyntax): any;
		public visitForInStatement(node: ForInStatementSyntax): any;
		public visitWhileStatement(node: WhileStatementSyntax): any;
		public visitWithStatement(node: WithStatementSyntax): any;
		public visitEnumDeclaration(node: EnumDeclarationSyntax): any;
		public visitEnumElement(node: EnumElementSyntax): any;
		public visitCastExpression(node: CastExpressionSyntax): any;
		public visitObjectLiteralExpression(node: ObjectLiteralExpressionSyntax): any;
		public visitSimplePropertyAssignment(node: SimplePropertyAssignmentSyntax): any;
		public visitFunctionPropertyAssignment(node: FunctionPropertyAssignmentSyntax): any;
		public visitFunctionExpression(node: FunctionExpressionSyntax): any;
		public visitEmptyStatement(node: EmptyStatementSyntax): any;
		public visitTryStatement(node: TryStatementSyntax): any;
		public visitCatchClause(node: CatchClauseSyntax): any;
		public visitFinallyClause(node: FinallyClauseSyntax): any;
		public visitLabeledStatement(node: LabeledStatementSyntax): any;
		public visitDoStatement(node: DoStatementSyntax): any;
		public visitTypeOfExpression(node: TypeOfExpressionSyntax): any;
		public visitDeleteExpression(node: DeleteExpressionSyntax): any;
		public visitVoidExpression(node: VoidExpressionSyntax): any;
		public visitDebuggerStatement(node: DebuggerStatementSyntax): any;
	}
	class SyntaxWalker implements ISyntaxVisitor {
		public visitToken(token: ISyntaxToken): void;
		public visitNode(node: SyntaxNode): void;
		public visitNodeOrToken(nodeOrToken: ISyntaxNodeOrToken): void;
		private visitOptionalToken(token);
		public visitOptionalNode(node: SyntaxNode): void;
		public visitOptionalNodeOrToken(nodeOrToken: ISyntaxNodeOrToken): void;
		public visitList(list: ISyntaxList): void;
		public visitSeparatedList(list: ISeparatedSyntaxList): void;
		public visitSourceUnit(node: SourceUnitSyntax): void;
		public visitExternalModuleReference(node: ExternalModuleReferenceSyntax): void;
		public visitModuleNameModuleReference(node: ModuleNameModuleReferenceSyntax): void;
		public visitImportDeclaration(node: ImportDeclarationSyntax): void;
		public visitExportAssignment(node: ExportAssignmentSyntax): void;
		public visitClassDeclaration(node: ClassDeclarationSyntax): void;
		public visitInterfaceDeclaration(node: InterfaceDeclarationSyntax): void;
		public visitHeritageClause(node: HeritageClauseSyntax): void;
		public visitModuleDeclaration(node: ModuleDeclarationSyntax): void;
		public visitFunctionDeclaration(node: FunctionDeclarationSyntax): void;
		public visitVariableStatement(node: VariableStatementSyntax): void;
		public visitVariableDeclaration(node: VariableDeclarationSyntax): void;
		public visitVariableDeclarator(node: VariableDeclaratorSyntax): void;
		public visitEqualsValueClause(node: EqualsValueClauseSyntax): void;
		public visitPrefixUnaryExpression(node: PrefixUnaryExpressionSyntax): void;
		public visitArrayLiteralExpression(node: ArrayLiteralExpressionSyntax): void;
		public visitOmittedExpression(node: OmittedExpressionSyntax): void;
		public visitParenthesizedExpression(node: ParenthesizedExpressionSyntax): void;
		public visitSimpleArrowFunctionExpression(node: SimpleArrowFunctionExpressionSyntax): void;
		public visitParenthesizedArrowFunctionExpression(node: ParenthesizedArrowFunctionExpressionSyntax): void;
		public visitQualifiedName(node: QualifiedNameSyntax): void;
		public visitTypeArgumentList(node: TypeArgumentListSyntax): void;
		public visitConstructorType(node: ConstructorTypeSyntax): void;
		public visitFunctionType(node: FunctionTypeSyntax): void;
		public visitObjectType(node: ObjectTypeSyntax): void;
		public visitArrayType(node: ArrayTypeSyntax): void;
		public visitGenericType(node: GenericTypeSyntax): void;
		public visitTypeQuery(node: TypeQuerySyntax): void;
		public visitTypeAnnotation(node: TypeAnnotationSyntax): void;
		public visitBlock(node: BlockSyntax): void;
		public visitParameter(node: ParameterSyntax): void;
		public visitMemberAccessExpression(node: MemberAccessExpressionSyntax): void;
		public visitPostfixUnaryExpression(node: PostfixUnaryExpressionSyntax): void;
		public visitElementAccessExpression(node: ElementAccessExpressionSyntax): void;
		public visitInvocationExpression(node: InvocationExpressionSyntax): void;
		public visitArgumentList(node: ArgumentListSyntax): void;
		public visitBinaryExpression(node: BinaryExpressionSyntax): void;
		public visitConditionalExpression(node: ConditionalExpressionSyntax): void;
		public visitConstructSignature(node: ConstructSignatureSyntax): void;
		public visitMethodSignature(node: MethodSignatureSyntax): void;
		public visitIndexSignature(node: IndexSignatureSyntax): void;
		public visitPropertySignature(node: PropertySignatureSyntax): void;
		public visitCallSignature(node: CallSignatureSyntax): void;
		public visitParameterList(node: ParameterListSyntax): void;
		public visitTypeParameterList(node: TypeParameterListSyntax): void;
		public visitTypeParameter(node: TypeParameterSyntax): void;
		public visitConstraint(node: ConstraintSyntax): void;
		public visitElseClause(node: ElseClauseSyntax): void;
		public visitIfStatement(node: IfStatementSyntax): void;
		public visitExpressionStatement(node: ExpressionStatementSyntax): void;
		public visitConstructorDeclaration(node: ConstructorDeclarationSyntax): void;
		public visitMemberFunctionDeclaration(node: MemberFunctionDeclarationSyntax): void;
		public visitGetAccessor(node: GetAccessorSyntax): void;
		public visitSetAccessor(node: SetAccessorSyntax): void;
		public visitMemberVariableDeclaration(node: MemberVariableDeclarationSyntax): void;
		public visitIndexMemberDeclaration(node: IndexMemberDeclarationSyntax): void;
		public visitThrowStatement(node: ThrowStatementSyntax): void;
		public visitReturnStatement(node: ReturnStatementSyntax): void;
		public visitObjectCreationExpression(node: ObjectCreationExpressionSyntax): void;
		public visitSwitchStatement(node: SwitchStatementSyntax): void;
		public visitCaseSwitchClause(node: CaseSwitchClauseSyntax): void;
		public visitDefaultSwitchClause(node: DefaultSwitchClauseSyntax): void;
		public visitBreakStatement(node: BreakStatementSyntax): void;
		public visitContinueStatement(node: ContinueStatementSyntax): void;
		public visitForStatement(node: ForStatementSyntax): void;
		public visitForInStatement(node: ForInStatementSyntax): void;
		public visitWhileStatement(node: WhileStatementSyntax): void;
		public visitWithStatement(node: WithStatementSyntax): void;
		public visitEnumDeclaration(node: EnumDeclarationSyntax): void;
		public visitEnumElement(node: EnumElementSyntax): void;
		public visitCastExpression(node: CastExpressionSyntax): void;
		public visitObjectLiteralExpression(node: ObjectLiteralExpressionSyntax): void;
		public visitSimplePropertyAssignment(node: SimplePropertyAssignmentSyntax): void;
		public visitFunctionPropertyAssignment(node: FunctionPropertyAssignmentSyntax): void;
		public visitFunctionExpression(node: FunctionExpressionSyntax): void;
		public visitEmptyStatement(node: EmptyStatementSyntax): void;
		public visitTryStatement(node: TryStatementSyntax): void;
		public visitCatchClause(node: CatchClauseSyntax): void;
		public visitFinallyClause(node: FinallyClauseSyntax): void;
		public visitLabeledStatement(node: LabeledStatementSyntax): void;
		public visitDoStatement(node: DoStatementSyntax): void;
		public visitTypeOfExpression(node: TypeOfExpressionSyntax): void;
		public visitDeleteExpression(node: DeleteExpressionSyntax): void;
		public visitVoidExpression(node: VoidExpressionSyntax): void;
		public visitDebuggerStatement(node: DebuggerStatementSyntax): void;
	}
	class PositionTrackingWalker extends SyntaxWalker {
		private _position;
		public visitToken(token: ISyntaxToken): void;
		public position(): number;
		public skip(element: ISyntaxElement): void;
	}
	interface ITokenInformation {
		previousToken: ISyntaxToken;
		nextToken: ISyntaxToken;
	}
	class SyntaxInformationMap extends SyntaxWalker {
		private trackParents;
		private trackPreviousToken;
		private tokenToInformation;
		private elementToPosition;
		private _previousToken;
		private _previousTokenInformation;
		private _currentPosition;
		private _elementToParent;
		private _parentStack;
		constructor(trackParents: boolean, trackPreviousToken: boolean);
		static create(node: SyntaxNode, trackParents: boolean, trackPreviousToken: boolean): SyntaxInformationMap;
		public visitNode(node: SyntaxNode): void;
		public visitToken(token: ISyntaxToken): void;
		public parent(element: ISyntaxElement): SyntaxNode;
		public fullStart(element: ISyntaxElement): number;
		public start(element: ISyntaxElement): number;
		public end(element: ISyntaxElement): number;
		public previousToken(token: ISyntaxToken): ISyntaxToken;
		public tokenInformation(token: ISyntaxToken): ITokenInformation;
		public firstTokenInLineContainingToken(token: ISyntaxToken): ISyntaxToken;
		public isFirstTokenInLine(token: ISyntaxToken): boolean;
		private isFirstTokenInLineWorker(information);
	}
	class SyntaxNodeInvariantsChecker extends SyntaxWalker {
		private tokenTable;
		static checkInvariants(node: SyntaxNode): void;
		public visitToken(token: ISyntaxToken): void;
	}
	class DepthLimitedWalker extends PositionTrackingWalker {
		private _depth;
		private _maximumDepth;
		constructor(maximumDepth: number);
		public visitNode(node: SyntaxNode): void;
	}
	class SyntaxTree {
		private _sourceUnit;
		private _isDeclaration;
		private _parserDiagnostics;
		private _allDiagnostics;
		private _fileName;
		private _lineMap;
		private _parseOptions;
		constructor(sourceUnit: SourceUnitSyntax, isDeclaration: boolean, diagnostics: Diagnostic[], fileName: string, lineMap: LineMap, parseOtions: ParseOptions);
		public toJSON(key: any): any;
		public sourceUnit(): SourceUnitSyntax;
		public isDeclaration(): boolean;
		private computeDiagnostics();
		public diagnostics(): Diagnostic[];
		public fileName(): string;
		public lineMap(): LineMap;
		public parseOptions(): ParseOptions;
		public structuralEquals(tree: SyntaxTree): boolean;
	}
	class Unicode {
		static unicodeES3IdentifierStart: number[];
		static unicodeES3IdentifierPart: number[];
		static unicodeES5IdentifierStart: number[];
		static unicodeES5IdentifierPart: number[];
		static lookupInUnicodeMap(code: number, map: number[]): boolean;
		static isIdentifierStart(code: number, languageVersion: LanguageVersion): boolean;
		static isIdentifierPart(code: number, languageVersion: LanguageVersion): boolean;
	}
	module CompilerDiagnostics {
		var debug: boolean;
		interface IDiagnosticWriter {
			Alert(output: string): void;
		}
		var diagnosticWriter: IDiagnosticWriter;
		var analysisPass: number;
		function Alert(output: string): void;
		function debugPrint(s: string): void;
		function assert(condition: boolean, s: string): void;
	}
	interface ILogger {
		information(): boolean;
		debug(): boolean;
		warning(): boolean;
		error(): boolean;
		fatal(): boolean;
		log(s: string): void;
	}
	class NullLogger implements ILogger {
		public information(): boolean;
		public debug(): boolean;
		public warning(): boolean;
		public error(): boolean;
		public fatal(): boolean;
		public log(s: string): void;
	}
	function timeFunction(logger: ILogger, funcDescription: string, func: () => any): any;
	class Document {
		private _compiler;
		private _semanticInfoChain;
		public fileName: string;
		public referencedFiles: string[];
		private _scriptSnapshot;
		public byteOrderMark: ByteOrderMark;
		public version: number;
		public isOpen: boolean;
		private _syntaxTree;
		private _topLevelDecl;
		private _diagnostics;
		private _bloomFilter;
		private _sourceUnit;
		private _lineMap;
		private _declASTMap;
		private _astDeclMap;
		private _isExternalModule;
		private _amdDependencies;
		constructor(_compiler: TypeScriptCompiler, _semanticInfoChain: SemanticInfoChain, fileName: string, referencedFiles: string[], _scriptSnapshot: IScriptSnapshot, byteOrderMark: ByteOrderMark, version: number, isOpen: boolean, _syntaxTree: SyntaxTree, _topLevelDecl: PullDecl);
		public invalidate(): void;
		public isDeclareFile(): boolean;
		private cacheSyntaxTreeInfo(syntaxTree);
		private getLeadingComments(node);
		private getAmdDependency(comment);
		private hasImplicitImport(sourceUnitLeadingComments);
		private getImplicitImport(comment);
		private hasTopLevelImportOrExport(node);
		public sourceUnit(): SourceUnit;
		public diagnostics(): Diagnostic[];
		public lineMap(): LineMap;
		public isExternalModule(): boolean;
		public amdDependencies(): string[];
		public syntaxTree(): SyntaxTree;
		public bloomFilter(): BloomFilter;
		public emitToOwnOutputFile(): boolean;
		public update(scriptSnapshot: IScriptSnapshot, version: number, isOpen: boolean, textChangeRange: TextChangeRange): Document;
		static create(compiler: TypeScriptCompiler, semanticInfoChain: SemanticInfoChain, fileName: string, scriptSnapshot: IScriptSnapshot, byteOrderMark: ByteOrderMark, version: number, isOpen: boolean, referencedFiles: string[]): Document;
		public topLevelDecl(): PullDecl;
		public _getDeclForAST(ast: AST): PullDecl;
		public getEnclosingDecl(ast: AST): PullDecl;
		public _setDeclForAST(ast: AST, decl: PullDecl): void;
		public _getASTForDecl(decl: PullDecl): AST;
		public _setASTForDecl(decl: PullDecl, ast: AST): void;
	}
	function hasFlag(val: number, flag: number): boolean;
	enum TypeRelationshipFlags {
		SuccessfulComparison = 0,
		RequiredPropertyIsMissing,
		IncompatibleSignatures,
		SourceSignatureHasTooManyParameters = 3,
		IncompatibleReturnTypes,
		IncompatiblePropertyTypes,
		IncompatibleParameterTypes,
		InconsistantPropertyAccesibility,
	}
	enum ModuleGenTarget {
		Unspecified = 0,
		Synchronous = 1,
		Asynchronous = 2,
	}
	interface IIndexable<T> {
		[s: string]: T;
	}
	function createIntrinsicsObject<T>(): IIndexable<T>;
	interface IHashTable<T> {
		getAllKeys(): string[];
		add(key: string, data: T): boolean;
		addOrUpdate(key: string, data: T): boolean;
		map(fn: (k: string, value: T, context: any) => void, context: any): void;
		every(fn: (k: string, value: T, context: any) => void, context: any): boolean;
		some(fn: (k: string, value: T, context: any) => void, context: any): boolean;
		count(): number;
		lookup(key: string): T;
	}
	class StringHashTable<T> implements IHashTable<T> {
		private itemCount;
		private table;
		public getAllKeys(): string[];
		public add(key: string, data: T): boolean;
		public addOrUpdate(key: string, data: T): boolean;
		public map(fn: (k: string, value: T, context: any) => void, context: any): void;
		public every(fn: (k: string, value: T, context: any) => void, context: any): boolean;
		public some(fn: (k: string, value: T, context: any) => void, context: any): boolean;
		public count(): number;
		public lookup(key: string): T;
		public remove(key: string): void;
	}
	class IdentiferNameHashTable<T> extends StringHashTable<T> {
		public getAllKeys(): string[];
		public add(key: string, data: T): boolean;
		public addOrUpdate(key: string, data: T): boolean;
		public map(fn: (k: string, value: T, context: any) => void, context: any): void;
		public every(fn: (k: string, value: T, context: any) => void, context: any): boolean;
		public some(fn: (k: string, value: any, context: any) => void, context: any): boolean;
		public lookup(key: string): T;
	}
	interface IASTSpan {
		_start: number;
		_end: number;
		start(): number;
		end(): number;
	}
	class ASTSpan implements IASTSpan {
		public _start: number;
		public _end: number;
		constructor(_start: number, _end: number);
		public start(): number;
		public end(): number;
	}
	function structuralEqualsNotIncludingPosition(ast1: AST, ast2: AST): boolean;
	function structuralEqualsIncludingPosition(ast1: AST, ast2: AST): boolean;
	class AST implements IASTSpan {
		public parent: AST;
		public _start: number;
		public _end: number;
		public _trailingTriviaWidth: number;
		private _astID;
		private _preComments;
		private _postComments;
		constructor();
		public syntaxID(): number;
		public start(): number;
		public end(): number;
		public trailingTriviaWidth(): number;
		public fileName(): string;
		public kind(): SyntaxKind;
		public preComments(): Comment[];
		public postComments(): Comment[];
		public setPreComments(comments: Comment[]): void;
		public setPostComments(comments: Comment[]): void;
		public width(): number;
		public structuralEquals(ast: AST, includingPosition: boolean): boolean;
	}
	interface IASTToken extends AST {
		text(): string;
		valueText(): string;
	}
	class ISyntaxList2 extends AST {
		private _fileName;
		private members;
		constructor(_fileName: string, members: AST[]);
		public childCount(): number;
		public childAt(index: number): AST;
		public fileName(): string;
		public kind(): SyntaxKind;
		public firstOrDefault(func: (v: AST, index: number) => boolean): AST;
		public lastOrDefault(func: (v: AST, index: number) => boolean): AST;
		public any(func: (v: AST) => boolean): boolean;
		public structuralEquals(ast: ISyntaxList2, includingPosition: boolean): boolean;
	}
	class ISeparatedSyntaxList2 extends AST {
		private _fileName;
		private members;
		private _separatorCount;
		constructor(_fileName: string, members: AST[], _separatorCount: number);
		public nonSeparatorCount(): number;
		public separatorCount(): number;
		public nonSeparatorAt(index: number): AST;
		public nonSeparatorIndexOf(ast: AST): number;
		public fileName(): string;
		public kind(): SyntaxKind;
		public structuralEquals(ast: ISeparatedSyntaxList2, includingPosition: boolean): boolean;
	}
	class SourceUnit extends AST {
		public moduleElements: ISyntaxList2;
		private _fileName;
		constructor(moduleElements: ISyntaxList2, _fileName: string);
		public fileName(): string;
		public kind(): SyntaxKind;
		public structuralEquals(ast: SourceUnit, includingPosition: boolean): boolean;
	}
	class Identifier extends AST implements IASTToken {
		private _text;
		private _valueText;
		constructor(_text: string);
		public text(): string;
		public valueText(): string;
		public kind(): SyntaxKind;
		public structuralEquals(ast: Identifier, includingPosition: boolean): boolean;
	}
	class LiteralExpression extends AST {
		private _nodeType;
		private _text;
		private _valueText;
		constructor(_nodeType: SyntaxKind, _text: string, _valueText: string);
		public text(): string;
		public valueText(): string;
		public kind(): SyntaxKind;
		public structuralEquals(ast: ParenthesizedExpression, includingPosition: boolean): boolean;
	}
	class ThisExpression extends AST implements IASTToken {
		private _text;
		private _valueText;
		constructor(_text: string, _valueText: string);
		public text(): string;
		public valueText(): string;
		public kind(): SyntaxKind;
		public structuralEquals(ast: ParenthesizedExpression, includingPosition: boolean): boolean;
	}
	class SuperExpression extends AST implements IASTToken {
		private _text;
		private _valueText;
		constructor(_text: string, _valueText: string);
		public text(): string;
		public valueText(): string;
		public kind(): SyntaxKind;
		public structuralEquals(ast: ParenthesizedExpression, includingPosition: boolean): boolean;
	}
	class NumericLiteral extends AST implements IASTToken {
		private _value;
		private _text;
		private _valueText;
		constructor(_value: number, _text: string, _valueText: string);
		public text(): string;
		public valueText(): string;
		public value(): any;
		public kind(): SyntaxKind;
		public structuralEquals(ast: NumericLiteral, includingPosition: boolean): boolean;
	}
	class RegularExpressionLiteral extends AST implements IASTToken {
		private _text;
		private _valueText;
		constructor(_text: string, _valueText: string);
		public text(): string;
		public valueText(): string;
		public kind(): SyntaxKind;
	}
	class StringLiteral extends AST implements IASTToken {
		private _text;
		private _valueText;
		constructor(_text: string, _valueText: string);
		public text(): string;
		public valueText(): string;
		public kind(): SyntaxKind;
		public structuralEquals(ast: StringLiteral, includingPosition: boolean): boolean;
	}
	class TypeAnnotation extends AST {
		public type: AST;
		constructor(type: AST);
		public kind(): SyntaxKind;
	}
	class BuiltInType extends AST implements IASTToken {
		private _nodeType;
		private _text;
		private _valueText;
		constructor(_nodeType: SyntaxKind, _text: string, _valueText: string);
		public text(): string;
		public valueText(): string;
		public kind(): SyntaxKind;
	}
	class ExternalModuleReference extends AST {
		public stringLiteral: StringLiteral;
		constructor(stringLiteral: StringLiteral);
		public kind(): SyntaxKind;
	}
	class ModuleNameModuleReference extends AST {
		public moduleName: AST;
		constructor(moduleName: AST);
		public kind(): SyntaxKind;
	}
	class ImportDeclaration extends AST {
		public modifiers: PullElementFlags[];
		public identifier: Identifier;
		public moduleReference: AST;
		constructor(modifiers: PullElementFlags[], identifier: Identifier, moduleReference: AST);
		public kind(): SyntaxKind;
		public structuralEquals(ast: ImportDeclaration, includingPosition: boolean): boolean;
	}
	class ExportAssignment extends AST {
		public identifier: Identifier;
		constructor(identifier: Identifier);
		public kind(): SyntaxKind;
		public structuralEquals(ast: ExportAssignment, includingPosition: boolean): boolean;
	}
	class TypeParameterList extends AST {
		public typeParameters: ISeparatedSyntaxList2;
		constructor(typeParameters: ISeparatedSyntaxList2);
		public kind(): SyntaxKind;
	}
	class ClassDeclaration extends AST {
		public modifiers: PullElementFlags[];
		public identifier: Identifier;
		public typeParameterList: TypeParameterList;
		public heritageClauses: ISyntaxList2;
		public classElements: ISyntaxList2;
		public closeBraceToken: ASTSpan;
		constructor(modifiers: PullElementFlags[], identifier: Identifier, typeParameterList: TypeParameterList, heritageClauses: ISyntaxList2, classElements: ISyntaxList2, closeBraceToken: ASTSpan);
		public kind(): SyntaxKind;
		public structuralEquals(ast: ClassDeclaration, includingPosition: boolean): boolean;
	}
	class InterfaceDeclaration extends AST {
		public modifiers: PullElementFlags[];
		public identifier: Identifier;
		public typeParameterList: TypeParameterList;
		public heritageClauses: ISyntaxList2;
		public body: ObjectType;
		constructor(modifiers: PullElementFlags[], identifier: Identifier, typeParameterList: TypeParameterList, heritageClauses: ISyntaxList2, body: ObjectType);
		public kind(): SyntaxKind;
		public structuralEquals(ast: InterfaceDeclaration, includingPosition: boolean): boolean;
	}
	class HeritageClause extends AST {
		private _nodeType;
		public typeNames: ISeparatedSyntaxList2;
		constructor(_nodeType: SyntaxKind, typeNames: ISeparatedSyntaxList2);
		public kind(): SyntaxKind;
		public structuralEquals(ast: HeritageClause, includingPosition: boolean): boolean;
	}
	class ModuleDeclaration extends AST {
		public modifiers: PullElementFlags[];
		public name: AST;
		public stringLiteral: StringLiteral;
		public moduleElements: ISyntaxList2;
		public endingToken: ASTSpan;
		constructor(modifiers: PullElementFlags[], name: AST, stringLiteral: StringLiteral, moduleElements: ISyntaxList2, endingToken: ASTSpan);
		public kind(): SyntaxKind;
		public structuralEquals(ast: ModuleDeclaration, includingPosition: boolean): boolean;
	}
	class FunctionDeclaration extends AST {
		public modifiers: PullElementFlags[];
		public identifier: Identifier;
		public callSignature: CallSignature;
		public block: Block;
		constructor(modifiers: PullElementFlags[], identifier: Identifier, callSignature: CallSignature, block: Block);
		public kind(): SyntaxKind;
		public structuralEquals(ast: FunctionDeclaration, includingPosition: boolean): boolean;
	}
	class VariableStatement extends AST {
		public modifiers: PullElementFlags[];
		public declaration: VariableDeclaration;
		constructor(modifiers: PullElementFlags[], declaration: VariableDeclaration);
		public kind(): SyntaxKind;
		public structuralEquals(ast: VariableStatement, includingPosition: boolean): boolean;
	}
	class VariableDeclaration extends AST {
		public declarators: ISeparatedSyntaxList2;
		constructor(declarators: ISeparatedSyntaxList2);
		public kind(): SyntaxKind;
		public structuralEquals(ast: VariableDeclaration, includingPosition: boolean): boolean;
	}
	class VariableDeclarator extends AST {
		public propertyName: IASTToken;
		public typeAnnotation: TypeAnnotation;
		public equalsValueClause: EqualsValueClause;
		constructor(propertyName: IASTToken, typeAnnotation: TypeAnnotation, equalsValueClause: EqualsValueClause);
		public kind(): SyntaxKind;
	}
	class EqualsValueClause extends AST {
		public value: AST;
		constructor(value: AST);
		public kind(): SyntaxKind;
	}
	class PrefixUnaryExpression extends AST {
		private _nodeType;
		public operand: AST;
		constructor(_nodeType: SyntaxKind, operand: AST);
		public kind(): SyntaxKind;
		public structuralEquals(ast: PrefixUnaryExpression, includingPosition: boolean): boolean;
	}
	class ArrayLiteralExpression extends AST {
		public expressions: ISeparatedSyntaxList2;
		constructor(expressions: ISeparatedSyntaxList2);
		public kind(): SyntaxKind;
		public structuralEquals(ast: ArrayLiteralExpression, includingPosition: boolean): boolean;
	}
	class OmittedExpression extends AST {
		public kind(): SyntaxKind;
		public structuralEquals(ast: CatchClause, includingPosition: boolean): boolean;
	}
	class ParenthesizedExpression extends AST {
		public openParenTrailingComments: Comment[];
		public expression: AST;
		constructor(openParenTrailingComments: Comment[], expression: AST);
		public kind(): SyntaxKind;
		public structuralEquals(ast: ParenthesizedExpression, includingPosition: boolean): boolean;
	}
	interface ICallExpression extends IASTSpan {
		expression: AST;
		argumentList: ArgumentList;
	}
	class SimpleArrowFunctionExpression extends AST {
		public identifier: Identifier;
		public block: Block;
		public expression: AST;
		constructor(identifier: Identifier, block: Block, expression: AST);
		public kind(): SyntaxKind;
	}
	class ParenthesizedArrowFunctionExpression extends AST {
		public callSignature: CallSignature;
		public block: Block;
		public expression: AST;
		constructor(callSignature: CallSignature, block: Block, expression: AST);
		public kind(): SyntaxKind;
	}
	class QualifiedName extends AST {
		public left: AST;
		public right: Identifier;
		constructor(left: AST, right: Identifier);
		public kind(): SyntaxKind;
		public structuralEquals(ast: QualifiedName, includingPosition: boolean): boolean;
	}
	class ParameterList extends AST {
		public openParenTrailingComments: Comment[];
		public parameters: ISeparatedSyntaxList2;
		constructor(openParenTrailingComments: Comment[], parameters: ISeparatedSyntaxList2);
		public kind(): SyntaxKind;
	}
	class ConstructorType extends AST {
		public typeParameterList: TypeParameterList;
		public parameterList: ParameterList;
		public type: AST;
		constructor(typeParameterList: TypeParameterList, parameterList: ParameterList, type: AST);
		public kind(): SyntaxKind;
	}
	class FunctionType extends AST {
		public typeParameterList: TypeParameterList;
		public parameterList: ParameterList;
		public type: AST;
		constructor(typeParameterList: TypeParameterList, parameterList: ParameterList, type: AST);
		public kind(): SyntaxKind;
	}
	class ObjectType extends AST {
		public typeMembers: ISeparatedSyntaxList2;
		constructor(typeMembers: ISeparatedSyntaxList2);
		public kind(): SyntaxKind;
		public structuralEquals(ast: ObjectType, includingPosition: boolean): boolean;
	}
	class ArrayType extends AST {
		public type: AST;
		constructor(type: AST);
		public kind(): SyntaxKind;
		public structuralEquals(ast: ArrayType, includingPosition: boolean): boolean;
	}
	class TypeArgumentList extends AST {
		public typeArguments: ISeparatedSyntaxList2;
		constructor(typeArguments: ISeparatedSyntaxList2);
		public kind(): SyntaxKind;
	}
	class GenericType extends AST {
		public name: AST;
		public typeArgumentList: TypeArgumentList;
		constructor(name: AST, typeArgumentList: TypeArgumentList);
		public kind(): SyntaxKind;
		public structuralEquals(ast: GenericType, includingPosition: boolean): boolean;
	}
	class TypeQuery extends AST {
		public name: AST;
		constructor(name: AST);
		public kind(): SyntaxKind;
		public structuralEquals(ast: TypeQuery, includingPosition: boolean): boolean;
	}
	class Block extends AST {
		public statements: ISyntaxList2;
		public closeBraceLeadingComments: Comment[];
		public closeBraceToken: IASTSpan;
		constructor(statements: ISyntaxList2, closeBraceLeadingComments: Comment[], closeBraceToken: IASTSpan);
		public kind(): SyntaxKind;
		public structuralEquals(ast: Block, includingPosition: boolean): boolean;
	}
	class Parameter extends AST {
		public dotDotDotToken: ASTSpan;
		public modifiers: PullElementFlags[];
		public identifier: Identifier;
		public questionToken: ASTSpan;
		public typeAnnotation: TypeAnnotation;
		public equalsValueClause: EqualsValueClause;
		constructor(dotDotDotToken: ASTSpan, modifiers: PullElementFlags[], identifier: Identifier, questionToken: ASTSpan, typeAnnotation: TypeAnnotation, equalsValueClause: EqualsValueClause);
		public kind(): SyntaxKind;
	}
	class MemberAccessExpression extends AST {
		public expression: AST;
		public name: Identifier;
		constructor(expression: AST, name: Identifier);
		public kind(): SyntaxKind;
		public structuralEquals(ast: MemberAccessExpression, includingPosition: boolean): boolean;
	}
	class PostfixUnaryExpression extends AST {
		private _nodeType;
		public operand: AST;
		constructor(_nodeType: SyntaxKind, operand: AST);
		public kind(): SyntaxKind;
		public structuralEquals(ast: PostfixUnaryExpression, includingPosition: boolean): boolean;
	}
	class ElementAccessExpression extends AST {
		public expression: AST;
		public argumentExpression: AST;
		constructor(expression: AST, argumentExpression: AST);
		public kind(): SyntaxKind;
		public structuralEquals(ast: ElementAccessExpression, includingPosition: boolean): boolean;
	}
	class InvocationExpression extends AST implements ICallExpression {
		public expression: AST;
		public argumentList: ArgumentList;
		constructor(expression: AST, argumentList: ArgumentList);
		public kind(): SyntaxKind;
		public structuralEquals(ast: InvocationExpression, includingPosition: boolean): boolean;
	}
	class ArgumentList extends AST {
		public typeArgumentList: TypeArgumentList;
		public arguments: ISeparatedSyntaxList2;
		public closeParenToken: ASTSpan;
		constructor(typeArgumentList: TypeArgumentList, arguments: ISeparatedSyntaxList2, closeParenToken: ASTSpan);
		public kind(): SyntaxKind;
	}
	class BinaryExpression extends AST {
		private _nodeType;
		public left: AST;
		public right: AST;
		constructor(_nodeType: SyntaxKind, left: AST, right: AST);
		public kind(): SyntaxKind;
		public structuralEquals(ast: BinaryExpression, includingPosition: boolean): boolean;
	}
	class ConditionalExpression extends AST {
		public condition: AST;
		public whenTrue: AST;
		public whenFalse: AST;
		constructor(condition: AST, whenTrue: AST, whenFalse: AST);
		public kind(): SyntaxKind;
		public structuralEquals(ast: ConditionalExpression, includingPosition: boolean): boolean;
	}
	class ConstructSignature extends AST {
		public callSignature: CallSignature;
		constructor(callSignature: CallSignature);
		public kind(): SyntaxKind;
	}
	class MethodSignature extends AST {
		public propertyName: IASTToken;
		public questionToken: ASTSpan;
		public callSignature: CallSignature;
		constructor(propertyName: IASTToken, questionToken: ASTSpan, callSignature: CallSignature);
		public kind(): SyntaxKind;
	}
	class IndexSignature extends AST {
		public parameter: Parameter;
		public typeAnnotation: TypeAnnotation;
		constructor(parameter: Parameter, typeAnnotation: TypeAnnotation);
		public kind(): SyntaxKind;
	}
	class PropertySignature extends AST {
		public propertyName: IASTToken;
		public questionToken: ASTSpan;
		public typeAnnotation: TypeAnnotation;
		constructor(propertyName: IASTToken, questionToken: ASTSpan, typeAnnotation: TypeAnnotation);
		public kind(): SyntaxKind;
	}
	class CallSignature extends AST {
		public typeParameterList: TypeParameterList;
		public parameterList: ParameterList;
		public typeAnnotation: TypeAnnotation;
		constructor(typeParameterList: TypeParameterList, parameterList: ParameterList, typeAnnotation: TypeAnnotation);
		public kind(): SyntaxKind;
	}
	class TypeParameter extends AST {
		public identifier: Identifier;
		public constraint: Constraint;
		constructor(identifier: Identifier, constraint: Constraint);
		public kind(): SyntaxKind;
		public structuralEquals(ast: TypeParameter, includingPosition: boolean): boolean;
	}
	class Constraint extends AST {
		public type: AST;
		constructor(type: AST);
		public kind(): SyntaxKind;
	}
	class ElseClause extends AST {
		public statement: AST;
		constructor(statement: AST);
		public kind(): SyntaxKind;
		public structuralEquals(ast: ElseClause, includingPosition: boolean): boolean;
	}
	class IfStatement extends AST {
		public condition: AST;
		public statement: AST;
		public elseClause: ElseClause;
		constructor(condition: AST, statement: AST, elseClause: ElseClause);
		public kind(): SyntaxKind;
		public structuralEquals(ast: IfStatement, includingPosition: boolean): boolean;
	}
	class ExpressionStatement extends AST {
		public expression: AST;
		constructor(expression: AST);
		public kind(): SyntaxKind;
		public structuralEquals(ast: ExpressionStatement, includingPosition: boolean): boolean;
	}
	class ConstructorDeclaration extends AST {
		public parameterList: ParameterList;
		public block: Block;
		constructor(parameterList: ParameterList, block: Block);
		public kind(): SyntaxKind;
	}
	class MemberFunctionDeclaration extends AST {
		public modifiers: PullElementFlags[];
		public propertyName: IASTToken;
		public callSignature: CallSignature;
		public block: Block;
		constructor(modifiers: PullElementFlags[], propertyName: IASTToken, callSignature: CallSignature, block: Block);
		public kind(): SyntaxKind;
	}
	class GetAccessor extends AST {
		public modifiers: PullElementFlags[];
		public propertyName: IASTToken;
		public parameterList: ParameterList;
		public typeAnnotation: TypeAnnotation;
		public block: Block;
		constructor(modifiers: PullElementFlags[], propertyName: IASTToken, parameterList: ParameterList, typeAnnotation: TypeAnnotation, block: Block);
		public kind(): SyntaxKind;
	}
	class SetAccessor extends AST {
		public modifiers: PullElementFlags[];
		public propertyName: IASTToken;
		public parameterList: ParameterList;
		public block: Block;
		constructor(modifiers: PullElementFlags[], propertyName: IASTToken, parameterList: ParameterList, block: Block);
		public kind(): SyntaxKind;
	}
	class MemberVariableDeclaration extends AST {
		public modifiers: PullElementFlags[];
		public variableDeclarator: VariableDeclarator;
		constructor(modifiers: PullElementFlags[], variableDeclarator: VariableDeclarator);
		public kind(): SyntaxKind;
	}
	class IndexMemberDeclaration extends AST {
		public indexSignature: IndexSignature;
		constructor(indexSignature: IndexSignature);
		public kind(): SyntaxKind;
	}
	class ThrowStatement extends AST {
		public expression: AST;
		constructor(expression: AST);
		public kind(): SyntaxKind;
		public structuralEquals(ast: ThrowStatement, includingPosition: boolean): boolean;
	}
	class ReturnStatement extends AST {
		public expression: AST;
		constructor(expression: AST);
		public kind(): SyntaxKind;
		public structuralEquals(ast: ReturnStatement, includingPosition: boolean): boolean;
	}
	class ObjectCreationExpression extends AST implements ICallExpression {
		public expression: AST;
		public argumentList: ArgumentList;
		constructor(expression: AST, argumentList: ArgumentList);
		public kind(): SyntaxKind;
		public structuralEquals(ast: ObjectCreationExpression, includingPosition: boolean): boolean;
	}
	class SwitchStatement extends AST {
		public expression: AST;
		public closeParenToken: ASTSpan;
		public switchClauses: ISyntaxList2;
		constructor(expression: AST, closeParenToken: ASTSpan, switchClauses: ISyntaxList2);
		public kind(): SyntaxKind;
		public structuralEquals(ast: SwitchStatement, includingPosition: boolean): boolean;
	}
	class CaseSwitchClause extends AST {
		public expression: AST;
		public statements: ISyntaxList2;
		constructor(expression: AST, statements: ISyntaxList2);
		public kind(): SyntaxKind;
		public structuralEquals(ast: CaseSwitchClause, includingPosition: boolean): boolean;
	}
	class DefaultSwitchClause extends AST {
		public statements: ISyntaxList2;
		constructor(statements: ISyntaxList2);
		public kind(): SyntaxKind;
		public structuralEquals(ast: DefaultSwitchClause, includingPosition: boolean): boolean;
	}
	class BreakStatement extends AST {
		public identifier: Identifier;
		constructor(identifier: Identifier);
		public kind(): SyntaxKind;
		public structuralEquals(ast: BreakStatement, includingPosition: boolean): boolean;
	}
	class ContinueStatement extends AST {
		public identifier: Identifier;
		constructor(identifier: Identifier);
		public kind(): SyntaxKind;
		public structuralEquals(ast: ContinueStatement, includingPosition: boolean): boolean;
	}
	class ForStatement extends AST {
		public variableDeclaration: VariableDeclaration;
		public initializer: AST;
		public condition: AST;
		public incrementor: AST;
		public statement: AST;
		constructor(variableDeclaration: VariableDeclaration, initializer: AST, condition: AST, incrementor: AST, statement: AST);
		public kind(): SyntaxKind;
		public structuralEquals(ast: ForStatement, includingPosition: boolean): boolean;
	}
	class ForInStatement extends AST {
		public variableDeclaration: VariableDeclaration;
		public left: AST;
		public expression: AST;
		public statement: AST;
		constructor(variableDeclaration: VariableDeclaration, left: AST, expression: AST, statement: AST);
		public kind(): SyntaxKind;
		public structuralEquals(ast: ForInStatement, includingPosition: boolean): boolean;
	}
	class WhileStatement extends AST {
		public condition: AST;
		public statement: AST;
		constructor(condition: AST, statement: AST);
		public kind(): SyntaxKind;
		public structuralEquals(ast: WhileStatement, includingPosition: boolean): boolean;
	}
	class WithStatement extends AST {
		public condition: AST;
		public statement: AST;
		constructor(condition: AST, statement: AST);
		public kind(): SyntaxKind;
		public structuralEquals(ast: WithStatement, includingPosition: boolean): boolean;
	}
	class EnumDeclaration extends AST {
		public modifiers: PullElementFlags[];
		public identifier: Identifier;
		public enumElements: ISeparatedSyntaxList2;
		constructor(modifiers: PullElementFlags[], identifier: Identifier, enumElements: ISeparatedSyntaxList2);
		public kind(): SyntaxKind;
	}
	class EnumElement extends AST {
		public propertyName: IASTToken;
		public equalsValueClause: EqualsValueClause;
		constructor(propertyName: IASTToken, equalsValueClause: EqualsValueClause);
		public kind(): SyntaxKind;
	}
	class CastExpression extends AST {
		public type: AST;
		public expression: AST;
		constructor(type: AST, expression: AST);
		public kind(): SyntaxKind;
		public structuralEquals(ast: CastExpression, includingPosition: boolean): boolean;
	}
	class ObjectLiteralExpression extends AST {
		public propertyAssignments: ISeparatedSyntaxList2;
		constructor(propertyAssignments: ISeparatedSyntaxList2);
		public kind(): SyntaxKind;
		public structuralEquals(ast: ObjectLiteralExpression, includingPosition: boolean): boolean;
	}
	class SimplePropertyAssignment extends AST {
		public propertyName: Identifier;
		public expression: AST;
		constructor(propertyName: Identifier, expression: AST);
		public kind(): SyntaxKind;
	}
	class FunctionPropertyAssignment extends AST {
		public propertyName: Identifier;
		public callSignature: CallSignature;
		public block: Block;
		constructor(propertyName: Identifier, callSignature: CallSignature, block: Block);
		public kind(): SyntaxKind;
	}
	class FunctionExpression extends AST {
		public identifier: Identifier;
		public callSignature: CallSignature;
		public block: Block;
		constructor(identifier: Identifier, callSignature: CallSignature, block: Block);
		public kind(): SyntaxKind;
	}
	class EmptyStatement extends AST {
		public kind(): SyntaxKind;
		public structuralEquals(ast: CatchClause, includingPosition: boolean): boolean;
	}
	class TryStatement extends AST {
		public block: Block;
		public catchClause: CatchClause;
		public finallyClause: FinallyClause;
		constructor(block: Block, catchClause: CatchClause, finallyClause: FinallyClause);
		public kind(): SyntaxKind;
		public structuralEquals(ast: TryStatement, includingPosition: boolean): boolean;
	}
	class CatchClause extends AST {
		public identifier: Identifier;
		public typeAnnotation: TypeAnnotation;
		public block: Block;
		constructor(identifier: Identifier, typeAnnotation: TypeAnnotation, block: Block);
		public kind(): SyntaxKind;
		public structuralEquals(ast: CatchClause, includingPosition: boolean): boolean;
	}
	class FinallyClause extends AST {
		public block: Block;
		constructor(block: Block);
		public kind(): SyntaxKind;
		public structuralEquals(ast: CatchClause, includingPosition: boolean): boolean;
	}
	class LabeledStatement extends AST {
		public identifier: Identifier;
		public statement: AST;
		constructor(identifier: Identifier, statement: AST);
		public kind(): SyntaxKind;
		public structuralEquals(ast: LabeledStatement, includingPosition: boolean): boolean;
	}
	class DoStatement extends AST {
		public statement: AST;
		public whileKeyword: ASTSpan;
		public condition: AST;
		constructor(statement: AST, whileKeyword: ASTSpan, condition: AST);
		public kind(): SyntaxKind;
		public structuralEquals(ast: DoStatement, includingPosition: boolean): boolean;
	}
	class TypeOfExpression extends AST {
		public expression: AST;
		constructor(expression: AST);
		public kind(): SyntaxKind;
		public structuralEquals(ast: TypeOfExpression, includingPosition: boolean): boolean;
	}
	class DeleteExpression extends AST {
		public expression: AST;
		constructor(expression: AST);
		public kind(): SyntaxKind;
		public structuralEquals(ast: DeleteExpression, includingPosition: boolean): boolean;
	}
	class VoidExpression extends AST {
		public expression: AST;
		constructor(expression: AST);
		public kind(): SyntaxKind;
		public structuralEquals(ast: VoidExpression, includingPosition: boolean): boolean;
	}
	class DebuggerStatement extends AST {
		public kind(): SyntaxKind;
	}
	class Comment {
		private _trivia;
		public endsLine: boolean;
		public _start: number;
		public _end: number;
		constructor(_trivia: ISyntaxTrivia, endsLine: boolean, _start: number, _end: number);
		public start(): number;
		public end(): number;
		public fullText(): string;
		public kind(): SyntaxKind;
		public structuralEquals(ast: Comment, includingPosition: boolean): boolean;
	}
	function diagnosticFromDecl(decl: PullDecl, diagnosticKey: string, arguments?: any[]): Diagnostic;
	function scriptIsElided(sourceUnit: SourceUnit): boolean;
	function moduleIsElided(declaration: ModuleDeclaration): boolean;
	function enumIsElided(declaration: EnumDeclaration): boolean;
	function importDeclarationIsElided(importDeclAST: ImportDeclaration, semanticInfoChain: SemanticInfoChain, compilationSettings?: ImmutableCompilationSettings): boolean;
	function isValidAstNode(ast: IASTSpan): boolean;
	function getAstAtPosition(script: AST, pos: number, useTrailingTriviaAsLimChar?: boolean, forceInclusive?: boolean): AST;
	function getExtendsHeritageClause(clauses: ISyntaxList2): HeritageClause;
	function getImplementsHeritageClause(clauses: ISyntaxList2): HeritageClause;
	function isCallExpression(ast: AST): boolean;
	function isCallExpressionTarget(ast: AST): boolean;
	function isDeclarationASTOrDeclarationNameAST(ast: AST): boolean;
	function isNameOfFunction(ast: AST): boolean;
	function isNameOfMemberFunction(ast: AST): boolean;
	function isNameOfMemberAccessExpression(ast: AST): boolean;
	function isRightSideOfQualifiedName(ast: AST): boolean;
	interface IParameters {
		length: number;
		lastParameterIsRest(): boolean;
		ast: AST;
		astAt(index: number): AST;
		identifierAt(index: number): Identifier;
		typeAt(index: number): AST;
		initializerAt(index: number): EqualsValueClause;
		isOptionalAt(index: number): boolean;
	}
	module Parameters {
		function fromIdentifier(id: Identifier): IParameters;
		function fromParameter(parameter: Parameter): IParameters;
		function fromParameterList(list: ParameterList): IParameters;
	}
	function isDeclarationAST(ast: AST): boolean;
	function docComments(ast: AST): Comment[];
	function getParameterList(ast: AST): ParameterList;
	function getType(ast: AST): AST;
	function getVariableDeclaratorModifiers(variableDeclarator: VariableDeclarator): PullElementFlags[];
	function isIntegerLiteralAST(expression: AST): boolean;
	function getEnclosingModuleDeclaration(ast: AST): ModuleDeclaration;
	function isLastNameOfModule(ast: ModuleDeclaration, astName: AST): boolean;
	function isAnyNameOfModule(ast: ModuleDeclaration, astName: AST): boolean;
	class AstWalkOptions {
		public goChildren: boolean;
		public stopWalking: boolean;
	}
	interface IAstWalker {
		options: AstWalkOptions;
		state: any;
	}
	class AstWalkerFactory {
		public walk(ast: AST, pre: (ast: AST, walker: IAstWalker) => void, post?: (ast: AST, walker: IAstWalker) => void, state?: any): void;
		public simpleWalk(ast: AST, pre: (ast: AST, state: any) => void, post?: (ast: AST, state: any) => void, state?: any): void;
	}
	function getAstWalkerFactory(): AstWalkerFactory;
	class Base64VLQFormat {
		static encode(inValue: number): string;
		static decode(inString: string): {
			value: number;
			rest: string;
		};
	}
	class SourceMapPosition {
		public sourceLine: number;
		public sourceColumn: number;
		public emittedLine: number;
		public emittedColumn: number;
	}
	class SourceMapping {
		public start: SourceMapPosition;
		public end: SourceMapPosition;
		public nameIndex: number;
		public childMappings: SourceMapping[];
	}
	class SourceMapEntry {
		public emittedFile: string;
		public emittedLine: number;
		public emittedColumn: number;
		public sourceFile: string;
		public sourceLine: number;
		public sourceColumn: number;
		public sourceName: string;
		constructor(emittedFile: string, emittedLine: number, emittedColumn: number, sourceFile: string, sourceLine: number, sourceColumn: number, sourceName: string);
	}
	class SourceMapper {
		private jsFile;
		private sourceMapOut;
		static MapFileExtension: string;
		private jsFileName;
		private sourceMapPath;
		private sourceMapDirectory;
		private sourceRoot;
		public names: string[];
		private mappingLevel;
		private tsFilePaths;
		private allSourceMappings;
		public currentMappings: SourceMapping[][];
		public currentNameIndex: number[];
		private sourceMapEntries;
		constructor(jsFile: TextWriter, sourceMapOut: TextWriter, document: Document, jsFilePath: string, emitOptions: EmitOptions, resolvePath: (path: string) => string);
		public getOutputFile(): OutputFile;
		public increaseMappingLevel(ast: IASTSpan): void;
		public decreaseMappingLevel(ast: IASTSpan): void;
		public setNewSourceFile(document: Document, emitOptions: EmitOptions): void;
		private setSourceMapOptions(document, jsFilePath, emitOptions, resolvePath);
		private setNewSourceFilePath(document, emitOptions);
		public emitSourceMapping(): void;
	}
	enum EmitContainer {
		Prog = 0,
		Module = 1,
		DynamicModule = 2,
		Class = 3,
		Constructor = 4,
		Function = 5,
		Args = 6,
		Interface = 7,
	}
	class EmitState {
		public column: number;
		public line: number;
		public container: EmitContainer;
		constructor();
	}
	class EmitOptions {
		public resolvePath: (path: string) => string;
		private _diagnostic;
		private _settings;
		private _commonDirectoryPath;
		private _sharedOutputFile;
		private _sourceRootDirectory;
		private _sourceMapRootDirectory;
		private _outputDirectory;
		public diagnostic(): Diagnostic;
		public commonDirectoryPath(): string;
		public sharedOutputFile(): string;
		public sourceRootDirectory(): string;
		public sourceMapRootDirectory(): string;
		public outputDirectory(): string;
		public compilationSettings(): ImmutableCompilationSettings;
		constructor(compiler: TypeScriptCompiler, resolvePath: (path: string) => string);
		private determineCommonDirectoryPath(compiler);
	}
	class Indenter {
		static indentStep: number;
		static indentStepString: string;
		static indentStrings: string[];
		public indentAmt: number;
		public increaseIndent(): void;
		public decreaseIndent(): void;
		public getIndent(): string;
	}
	function lastParameterIsRest(parameterList: ParameterList): boolean;
	class Emitter {
		public emittingFileName: string;
		public outfile: TextWriter;
		public emitOptions: EmitOptions;
		private semanticInfoChain;
		public globalThisCapturePrologueEmitted: boolean;
		public extendsPrologueEmitted: boolean;
		public thisClassNode: ClassDeclaration;
		public inArrowFunction: boolean;
		public moduleName: string;
		public emitState: EmitState;
		public indenter: Indenter;
		public sourceMapper: SourceMapper;
		public captureThisStmtString: string;
		private currentVariableDeclaration;
		private declStack;
		private exportAssignmentIdentifier;
		private inWithBlock;
		public document: Document;
		private copyrightElement;
		constructor(emittingFileName: string, outfile: TextWriter, emitOptions: EmitOptions, semanticInfoChain: SemanticInfoChain);
		private pushDecl(decl);
		private popDecl(decl);
		private getEnclosingDecl();
		public setExportAssignmentIdentifier(id: string): void;
		public getExportAssignmentIdentifier(): string;
		public setDocument(document: Document): void;
		public shouldEmitImportDeclaration(importDeclAST: ImportDeclaration): boolean;
		public emitImportDeclaration(importDeclAST: ImportDeclaration): void;
		public createSourceMapper(document: Document, jsFileName: string, jsFile: TextWriter, sourceMapOut: TextWriter, resolvePath: (path: string) => string): void;
		public setSourceMapperNewSourceFile(document: Document): void;
		private updateLineAndColumn(s);
		public writeToOutputWithSourceMapRecord(s: string, astSpan: IASTSpan): void;
		public writeToOutput(s: string): void;
		public writeLineToOutput(s: string, force?: boolean): void;
		public writeCaptureThisStatement(ast: AST): void;
		public setContainer(c: number): number;
		private getIndentString();
		public emitIndent(): void;
		public emitComment(comment: Comment, trailing: boolean, first: boolean): void;
		public emitComments(ast: AST, pre: boolean, onlyPinnedOrTripleSlashComments?: boolean): void;
		private isPinnedOrTripleSlash(comment);
		public emitCommentsArray(comments: Comment[], trailing: boolean): void;
		public emitObjectLiteralExpression(objectLiteral: ObjectLiteralExpression): void;
		public emitArrayLiteralExpression(arrayLiteral: ArrayLiteralExpression): void;
		public emitObjectCreationExpression(objectCreationExpression: ObjectCreationExpression): void;
		public getConstantDecl(dotExpr: MemberAccessExpression): PullEnumElementDecl;
		public tryEmitConstant(dotExpr: MemberAccessExpression): boolean;
		public emitInvocationExpression(callNode: InvocationExpression): void;
		private emitParameterList(list);
		private emitFunctionParameters(parameters);
		private emitFunctionBodyStatements(name, funcDecl, parameterList, block, bodyExpression);
		private emitDefaultValueAssignments(parameters);
		private emitRestParameterInitializer(parameters);
		private getImportDecls(fileName);
		public getModuleImportAndDependencyList(sourceUnit: SourceUnit): {
			importList: string;
			dependencyList: string;
		};
		public shouldCaptureThis(ast: AST): boolean;
		public emitEnum(moduleDecl: EnumDeclaration): void;
		private getModuleDeclToVerifyChildNameCollision(moduleDecl, changeNameIfAnyDeclarationInContext);
		private hasChildNameCollision(moduleName, childDecls);
		private getModuleName(moduleDecl, changeNameIfAnyDeclarationInContext?);
		private emitModuleDeclarationWorker(moduleDecl);
		public emitSingleModuleDeclaration(moduleDecl: ModuleDeclaration, moduleName: IASTToken): void;
		public emitEnumElement(varDecl: EnumElement): void;
		public emitElementAccessExpression(expression: ElementAccessExpression): void;
		public emitSimpleArrowFunctionExpression(arrowFunction: SimpleArrowFunctionExpression): void;
		public emitParenthesizedArrowFunctionExpression(arrowFunction: ParenthesizedArrowFunctionExpression): void;
		private emitAnyArrowFunctionExpression(arrowFunction, funcName, parameters, block, expression);
		public emitConstructor(funcDecl: ConstructorDeclaration): void;
		public emitGetAccessor(accessor: GetAccessor): void;
		public emitSetAccessor(accessor: SetAccessor): void;
		public emitFunctionExpression(funcDecl: FunctionExpression): void;
		public emitFunction(funcDecl: FunctionDeclaration): void;
		public emitAmbientVarDecl(varDecl: VariableDeclarator): void;
		public emitVarDeclVar(): void;
		public emitVariableDeclaration(declaration: VariableDeclaration): void;
		private emitMemberVariableDeclaration(varDecl);
		public emitVariableDeclarator(varDecl: VariableDeclarator): void;
		private symbolIsUsedInItsEnclosingContainer(symbol, dynamic?);
		private getPotentialDeclPathInfoForEmit(pullSymbol);
		private emitDottedNameFromDeclPath(declPath, startingIndex, lastIndex);
		private emitSymbolContainerNameInEnclosingContext(pullSymbol);
		private getSymbolForEmit(ast);
		public emitName(name: Identifier, addThis: boolean): void;
		public recordSourceMappingNameStart(name: string): void;
		public recordSourceMappingNameEnd(): void;
		public recordSourceMappingStart(ast: IASTSpan): void;
		public recordSourceMappingEnd(ast: IASTSpan): void;
		public getOutputFiles(): OutputFile[];
		private emitParameterPropertyAndMemberVariableAssignments();
		private isOnSameLine(pos1, pos2);
		private emitCommaSeparatedList(parent, list, buffer, preserveNewLines);
		public emitList(list: ISyntaxList2, useNewLineSeparator?: boolean, startInclusive?: number, endExclusive?: number): void;
		public emitSeparatedList(list: ISeparatedSyntaxList2, useNewLineSeparator?: boolean, startInclusive?: number, endExclusive?: number): void;
		private isDirectivePrologueElement(node);
		public emitSpaceBetweenConstructs(node1: AST, node2: AST): void;
		private getCopyrightComments();
		private emitPossibleCopyrightHeaders(script);
		public emitScriptElements(sourceUnit: SourceUnit): void;
		public emitConstructorStatements(funcDecl: ConstructorDeclaration): void;
		public emitJavascript(ast: AST, startLine: boolean): void;
		public emitAccessorMemberDeclaration(funcDecl: AST, name: IASTToken, className: string, isProto: boolean): void;
		private emitAccessorBody(funcDecl, parameterList, block);
		public emitClass(classDecl: ClassDeclaration): void;
		private emitClassMembers(classDecl);
		private emitClassMemberFunctionDeclaration(classDecl, funcDecl);
		private requiresExtendsBlock(moduleElements);
		public emitPrologue(sourceUnit: SourceUnit): void;
		public emitThis(): void;
		public emitBlockOrStatement(node: AST): void;
		public emitLiteralExpression(expression: LiteralExpression): void;
		public emitThisExpression(expression: ThisExpression): void;
		public emitSuperExpression(expression: SuperExpression): void;
		public emitParenthesizedExpression(parenthesizedExpression: ParenthesizedExpression): void;
		public emitCastExpression(expression: CastExpression): void;
		public emitPrefixUnaryExpression(expression: PrefixUnaryExpression): void;
		public emitPostfixUnaryExpression(expression: PostfixUnaryExpression): void;
		public emitTypeOfExpression(expression: TypeOfExpression): void;
		public emitDeleteExpression(expression: DeleteExpression): void;
		public emitVoidExpression(expression: VoidExpression): void;
		private canEmitDottedNameMemberAccessExpression(expression);
		private emitDottedNameMemberAccessExpressionWorker(expression, potentialPath, startingIndex, lastIndex);
		private emitDottedNameMemberAccessExpressionRecurse(expression, potentialPath, startingIndex, lastIndex);
		private emitDottedNameMemberAccessExpression(expression);
		public emitMemberAccessExpression(expression: MemberAccessExpression): void;
		public emitQualifiedName(name: QualifiedName): void;
		public emitBinaryExpression(expression: BinaryExpression): void;
		public emitSimplePropertyAssignment(property: SimplePropertyAssignment): void;
		public emitFunctionPropertyAssignment(funcProp: FunctionPropertyAssignment): void;
		public emitConditionalExpression(expression: ConditionalExpression): void;
		public emitThrowStatement(statement: ThrowStatement): void;
		public emitExpressionStatement(statement: ExpressionStatement): void;
		public emitLabeledStatement(statement: LabeledStatement): void;
		public emitBlock(block: Block): void;
		public emitBreakStatement(jump: BreakStatement): void;
		public emitContinueStatement(jump: ContinueStatement): void;
		public emitWhileStatement(statement: WhileStatement): void;
		public emitDoStatement(statement: DoStatement): void;
		public emitIfStatement(statement: IfStatement): void;
		public emitElseClause(elseClause: ElseClause): void;
		public emitReturnStatement(statement: ReturnStatement): void;
		public emitForInStatement(statement: ForInStatement): void;
		public emitForStatement(statement: ForStatement): void;
		public emitWithStatement(statement: WithStatement): void;
		public emitSwitchStatement(statement: SwitchStatement): void;
		public emitCaseSwitchClause(clause: CaseSwitchClause): void;
		private emitSwitchClauseBody(body);
		public emitDefaultSwitchClause(clause: DefaultSwitchClause): void;
		public emitTryStatement(statement: TryStatement): void;
		public emitCatchClause(clause: CatchClause): void;
		public emitFinallyClause(clause: FinallyClause): void;
		public emitDebuggerStatement(statement: DebuggerStatement): void;
		public emitNumericLiteral(literal: NumericLiteral): void;
		public emitRegularExpressionLiteral(literal: RegularExpressionLiteral): void;
		public emitStringLiteral(literal: StringLiteral): void;
		public emitEqualsValueClause(clause: EqualsValueClause): void;
		public emitParameter(parameter: Parameter): void;
		public emitConstructorDeclaration(declaration: ConstructorDeclaration): void;
		public shouldEmitFunctionDeclaration(declaration: FunctionDeclaration): boolean;
		public emitFunctionDeclaration(declaration: FunctionDeclaration): void;
		private emitSourceUnit(sourceUnit);
		public shouldEmitEnumDeclaration(declaration: EnumDeclaration): boolean;
		public emitEnumDeclaration(declaration: EnumDeclaration): void;
		public shouldEmitModuleDeclaration(declaration: ModuleDeclaration): boolean;
		private emitModuleDeclaration(declaration);
		public shouldEmitClassDeclaration(declaration: ClassDeclaration): boolean;
		public emitClassDeclaration(declaration: ClassDeclaration): void;
		public shouldEmitInterfaceDeclaration(declaration: InterfaceDeclaration): boolean;
		public emitInterfaceDeclaration(declaration: InterfaceDeclaration): void;
		private firstVariableDeclarator(statement);
		private isNotAmbientOrHasInitializer(variableStatement);
		public shouldEmitVariableStatement(statement: VariableStatement): boolean;
		public emitVariableStatement(statement: VariableStatement): void;
		public emitGenericType(type: GenericType): void;
		private shouldEmit(ast);
		private emit(ast);
		private emitWorker(ast);
	}
	function getLastConstructor(classDecl: ClassDeclaration): ConstructorDeclaration;
	function getTrimmedTextLines(comment: Comment): string[];
	class MemberName {
		public prefix: string;
		public suffix: string;
		public isString(): boolean;
		public isArray(): boolean;
		public isMarker(): boolean;
		public toString(): string;
		static memberNameToString(memberName: MemberName, markerInfo?: number[], markerBaseLength?: number): string;
		static create(text: string): MemberName;
		static create(entry: MemberName, prefix: string, suffix: string): MemberName;
	}
	class MemberNameString extends MemberName {
		public text: string;
		constructor(text: string);
		public isString(): boolean;
	}
	class MemberNameArray extends MemberName {
		public delim: string;
		public entries: MemberName[];
		public isArray(): boolean;
		public add(entry: MemberName): void;
		public addAll(entries: MemberName[]): void;
		constructor();
	}
	function stripStartAndEndQuotes(str: string): string;
	function isSingleQuoted(str: string): boolean;
	function isDoubleQuoted(str: string): boolean;
	function isQuoted(str: string): boolean;
	function quoteStr(str: string): string;
	function switchToForwardSlashes(path: string): string;
	function trimModName(modName: string): string;
	function getDeclareFilePath(fname: string): string;
	function isTSFile(fname: string): boolean;
	function isDTSFile(fname: string): boolean;
	function getPrettyName(modPath: string, quote?: boolean, treatAsFileName?: boolean): any;
	function getPathComponents(path: string): string[];
	function getRelativePathToFixedPath(fixedModFilePath: string, absoluteModPath: string, isAbsoultePathURL?: boolean): string;
	function changePathToDTS(modPath: string): string;
	function isRelative(path: string): boolean;
	function isRooted(path: string): boolean;
	function getRootFilePath(outFname: string): string;
	function filePathComponents(fullPath: string): string[];
	function filePath(fullPath: string): string;
	function convertToDirectoryPath(dirPath: string): string;
	function normalizePath(path: string): string;
	interface IFileReference extends ILineAndCharacter {
		path: string;
		isResident: boolean;
		position: number;
		length: number;
	}
	interface IPreProcessedFileInfo {
		referencedFiles: IFileReference[];
		importedFiles: IFileReference[];
		diagnostics: Diagnostic[];
		isLibFile: boolean;
	}
	var tripleSlashReferenceRegExp: RegExp;
	function preProcessFile(fileName: string, sourceText: IScriptSnapshot, readImportFiles?: boolean): IPreProcessedFileInfo;
	function getParseOptions(settings: ImmutableCompilationSettings): ParseOptions;
	function getReferencedFiles(fileName: string, sourceText: IScriptSnapshot): IFileReference[];
	interface IResolvedFile {
		path: string;
		referencedFiles: string[];
		importedFiles: string[];
	}
	interface IReferenceResolverHost {
		getScriptSnapshot(fileName: string): IScriptSnapshot;
		resolveRelativePath(path: string, directory: string): string;
		fileExists(path: string): boolean;
		directoryExists(path: string): boolean;
		getParentDirectory(path: string): string;
	}
	class ReferenceResolutionResult {
		public resolvedFiles: IResolvedFile[];
		public diagnostics: Diagnostic[];
		public seenNoDefaultLibTag: boolean;
	}
	class ReferenceResolver {
		private useCaseSensitiveFileResolution;
		private inputFileNames;
		private host;
		private visited;
		constructor(inputFileNames: string[], host: IReferenceResolverHost, useCaseSensitiveFileResolution: boolean);
		static resolve(inputFileNames: string[], host: IReferenceResolverHost, useCaseSensitiveFileResolution: boolean): ReferenceResolutionResult;
		public resolveInputFiles(): ReferenceResolutionResult;
		private resolveIncludedFile(path, referenceLocation, resolutionResult);
		private resolveImportedFile(path, referenceLocation, resolutionResult);
		private resolveFile(normalizedPath, resolutionResult);
		private getNormalizedFilePath(path, parentFilePath);
		private getUniqueFileId(filePath);
		private recordVisitedFile(filePath);
		private isVisited(filePath);
		private isSameFile(filePath1, filePath2);
	}
	class TextWriter {
		private name;
		private writeByteOrderMark;
		private outputFileType;
		private contents;
		public onNewLine: boolean;
		constructor(name: string, writeByteOrderMark: boolean, outputFileType: OutputFileType);
		public Write(s: string): void;
		public WriteLine(s: string): void;
		public Close(): void;
		public getOutputFile(): OutputFile;
	}
	class DeclarationEmitter {
		private emittingFileName;
		public document: Document;
		private compiler;
		private emitOptions;
		private semanticInfoChain;
		private declFile;
		private indenter;
		private emittedReferencePaths;
		constructor(emittingFileName: string, document: Document, compiler: TypeScriptCompiler, emitOptions: EmitOptions, semanticInfoChain: SemanticInfoChain);
		public getOutputFile(): OutputFile;
		public emitDeclarations(sourceUnit: SourceUnit): void;
		private emitDeclarationsForList(list);
		private emitSeparatedList(list);
		private emitDeclarationsForAST(ast);
		private getIndentString(declIndent?);
		private emitIndent();
		private canEmitDeclarations(declAST);
		private getDeclFlagsString(pullDecl, typeString);
		private emitDeclFlags(declarationAST, typeString);
		private emitTypeNamesMember(memberName, emitIndent?);
		private emitTypeSignature(ast, type);
		private emitComment(comment);
		private emitDeclarationComments(ast, endLine?);
		private writeDeclarationComments(declComments, endLine?);
		private emitTypeOfVariableDeclaratorOrParameter(boundDecl);
		private emitPropertySignature(varDecl);
		private emitVariableDeclarator(varDecl, isFirstVarInList, isLastVarInList);
		private emitClassElementModifiers(modifiers);
		private emitDeclarationsForMemberVariableDeclaration(varDecl);
		private emitDeclarationsForVariableStatement(variableStatement);
		private emitDeclarationsForVariableDeclaration(variableDeclaration);
		private emitArgDecl(argDecl, id, isOptional, isPrivate);
		private isOverloadedCallSignature(funcDecl);
		private emitDeclarationsForConstructorDeclaration(funcDecl);
		private emitParameterList(isPrivate, parameterList);
		private emitParameters(isPrivate, parameterList);
		private emitMemberFunctionDeclaration(funcDecl);
		private emitCallSignature(funcDecl);
		private emitConstructSignature(funcDecl);
		private emitMethodSignature(funcDecl);
		private emitDeclarationsForFunctionDeclaration(funcDecl);
		private emitIndexMemberDeclaration(funcDecl);
		private emitIndexSignature(funcDecl);
		private emitBaseList(bases, useExtendsList);
		private emitAccessorDeclarationComments(funcDecl);
		private emitDeclarationsForGetAccessor(funcDecl);
		private emitDeclarationsForSetAccessor(funcDecl);
		private emitMemberAccessorDeclaration(funcDecl, modifiers, name);
		private emitClassMembersFromConstructorDefinition(funcDecl);
		private emitDeclarationsForClassDeclaration(classDecl);
		private emitHeritageClauses(clauses);
		private emitHeritageClause(clause);
		private getEnclosingContainer(ast);
		private emitTypeParameters(typeParams, funcSignature?);
		private emitDeclarationsForInterfaceDeclaration(interfaceDecl);
		private emitDeclarationsForImportDeclaration(importDeclAST);
		public getFullName(name: AST): string;
		private emitDeclarationsForEnumDeclaration(moduleDecl);
		private emitDeclarationsForModuleDeclaration(moduleDecl);
		private emitDeclarationsForExportAssignment(ast);
		private resolveScriptReference(document, reference);
		private emitReferencePaths(sourceUnit);
		private emitDeclarationsForSourceUnit(sourceUnit);
	}
	class BloomFilter {
		private bitArray;
		private hashFunctionCount;
		static falsePositiveProbability: number;
		constructor(expectedCount: number);
		static computeM(expectedCount: number): number;
		static computeK(expectedCount: number): number;
		/** Modification of the murmurhash2 algorithm.  Code is simpler because it operates over
		* strings instead of byte arrays.  Because each string character is two bytes, it is known
		* that the input will be an even number of bytes (though not necessarily a multiple of 4).
		*
		* This is needed over the normal 'string.GetHashCode()' because we need to be able to generate
		* 'k' different well distributed hashes for any given string s.  Also, we want to be able to
		* generate these hashes without allocating any memory.  My ideal solution would be to use an
		* MD5 hash.  However, there appears to be no way to do MD5 in .Net where you can:
		*
		* a) feed it individual values instead of a byte[]
		*
		* b) have the hash computed into a byte[] you provide instead of a newly allocated one
		*
		* Generating 'k' pieces of garbage on each insert and lookup seems very wasteful.  So,
		* instead, we use murmur hash since it provides well distributed values, allows for a
		* seed, and allocates no memory.
		*
		* Murmur hash is public domain.  Actual code is included below as reference.
		*/
		private computeHash(key, seed);
		public addKeys(keys: IIndexable<any>): void;
		public add(value: string): void;
		public probablyContains(value: string): boolean;
		public isEquivalent(filter: BloomFilter): boolean;
		static isEquivalent(array1: boolean[], array2: boolean[]): boolean;
	}
	class IdentifierWalker extends SyntaxWalker {
		public list: IIndexable<boolean>;
		constructor(list: IIndexable<boolean>);
		public visitToken(token: ISyntaxToken): void;
	}
	class CompilationSettings {
		public propagateEnumConstants: boolean;
		public removeComments: boolean;
		public watch: boolean;
		public noResolve: boolean;
		public allowAutomaticSemicolonInsertion: boolean;
		public noImplicitAny: boolean;
		public noLib: boolean;
		public codeGenTarget: LanguageVersion;
		public moduleGenTarget: ModuleGenTarget;
		public outFileOption: string;
		public outDirOption: string;
		public mapSourceFiles: boolean;
		public mapRoot: string;
		public sourceRoot: string;
		public generateDeclarationFiles: boolean;
		public useCaseSensitiveFileResolution: boolean;
		public gatherDiagnostics: boolean;
		public codepage: number;
	}
	class ImmutableCompilationSettings {
		private static _defaultSettings;
		private _propagateEnumConstants;
		private _removeComments;
		private _watch;
		private _noResolve;
		private _allowAutomaticSemicolonInsertion;
		private _noImplicitAny;
		private _noLib;
		private _codeGenTarget;
		private _moduleGenTarget;
		private _outFileOption;
		private _outDirOption;
		private _mapSourceFiles;
		private _mapRoot;
		private _sourceRoot;
		private _generateDeclarationFiles;
		private _useCaseSensitiveFileResolution;
		private _gatherDiagnostics;
		private _codepage;
		public propagateEnumConstants(): boolean;
		public removeComments(): boolean;
		public watch(): boolean;
		public noResolve(): boolean;
		public allowAutomaticSemicolonInsertion(): boolean;
		public noImplicitAny(): boolean;
		public noLib(): boolean;
		public codeGenTarget(): LanguageVersion;
		public moduleGenTarget(): ModuleGenTarget;
		public outFileOption(): string;
		public outDirOption(): string;
		public mapSourceFiles(): boolean;
		public mapRoot(): string;
		public sourceRoot(): string;
		public generateDeclarationFiles(): boolean;
		public useCaseSensitiveFileResolution(): boolean;
		public gatherDiagnostics(): boolean;
		public codepage(): number;
		constructor(propagateEnumConstants: boolean, removeComments: boolean, watch: boolean, noResolve: boolean, allowAutomaticSemicolonInsertion: boolean, noImplicitAny: boolean, noLib: boolean, codeGenTarget: LanguageVersion, moduleGenTarget: ModuleGenTarget, outFileOption: string, outDirOption: string, mapSourceFiles: boolean, mapRoot: string, sourceRoot: string, generateDeclarationFiles: boolean, useCaseSensitiveFileResolution: boolean, gatherDiagnostics: boolean, codepage: number);
		static defaultSettings(): ImmutableCompilationSettings;
		static fromCompilationSettings(settings: CompilationSettings): ImmutableCompilationSettings;
		public toCompilationSettings(): any;
	}
	enum PullElementFlags {
		None = 0,
		Exported = 1,
		Private,
		Public,
		Ambient,
		Static,
		Optional,
		Signature,
		Enum,
		ArrowFunction,
		ClassConstructorVariable,
		InitializedModule,
		InitializedDynamicModule,
		MustCaptureThis,
		DeclaredInAWithBlock,
		HasReturnStatement,
		PropertyParameter,
		IsAnnotatedWithAny,
		HasDefaultArgs,
		ConstructorParameter,
		ImplicitVariable,
		SomeInitializedModule,
	}
	function hasModifier(modifiers: PullElementFlags[], flag: PullElementFlags): boolean;
	enum PullElementKind {
		None = 0,
		Global = 0,
		Script,
		Primitive,
		Container,
		Class,
		Interface,
		DynamicModule,
		Enum,
		TypeAlias,
		ObjectLiteral,
		Variable,
		CatchVariable,
		Parameter,
		Property,
		TypeParameter,
		Function,
		ConstructorMethod,
		Method,
		FunctionExpression,
		GetAccessor,
		SetAccessor,
		CallSignature,
		ConstructSignature,
		IndexSignature,
		ObjectType,
		FunctionType,
		ConstructorType,
		EnumMember,
		WithBlock,
		CatchBlock,
		All,
		SomeFunction,
		SomeValue,
		SomeType,
		AcceptableAlias,
		SomeContainer,
		SomeSignature,
		SomeTypeReference,
		SomeInstantiatableType,
	}
	var pullDeclID: number;
	class PullDecl {
		public kind: PullElementKind;
		public name: string;
		private declDisplayName;
		public declID: number;
		public flags: PullElementFlags;
		private span;
		private declGroups;
		private childDecls;
		private typeParameters;
		private synthesizedValDecl;
		public childDeclTypeCache: IIndexable<PullDecl[]>;
		public childDeclValueCache: IIndexable<PullDecl[]>;
		public childDeclNamespaceCache: IIndexable<PullDecl[]>;
		public childDeclTypeParameterCache: IIndexable<PullDecl[]>;
		constructor(declName: string, displayName: string, kind: PullElementKind, declFlags: PullElementFlags, span: TextSpan);
		public fileName(): string;
		public getParentPath(): PullDecl[];
		public getParentDecl(): PullDecl;
		public semanticInfoChain(): SemanticInfoChain;
		public isExternalModule(): boolean;
		public getEnclosingDecl(): PullDecl;
		public _getEnclosingDeclFromParentDecl(): PullDecl;
		/** Use getName for type checking purposes, and getDisplayName to report an error or display info to the user.
		* They will differ when the identifier is an escaped unicode character or the identifier "__proto__".
		*/
		public getDisplayName(): string;
		public setSymbol(symbol: PullSymbol): void;
		public ensureSymbolIsBound(bindSignatureSymbol?: boolean): void;
		public getSymbol(): PullSymbol;
		public hasSymbol(): boolean;
		public setSignatureSymbol(signatureSymbol: PullSignatureSymbol): void;
		public getSignatureSymbol(): PullSignatureSymbol;
		public hasSignatureSymbol(): boolean;
		public setFlags(flags: PullElementFlags): void;
		public setFlag(flags: PullElementFlags): void;
		public getSpan(): TextSpan;
		public setValueDecl(valDecl: PullDecl): void;
		public getValueDecl(): PullDecl;
		public isEqual(other: PullDecl): boolean;
		private getChildDeclCache(declKind);
		public addChildDecl(childDecl: PullDecl): void;
		public searchChildDecls(declName: string, searchKind: PullElementKind): PullDecl[];
		public getChildDecls(): PullDecl[];
		public getTypeParameters(): PullDecl[];
		public addVariableDeclToGroup(decl: PullDecl): void;
		public getVariableDeclGroups(): PullDecl[][];
		public hasBeenBound(): boolean;
		public isSynthesized(): boolean;
		public ast(): AST;
	}
	class RootPullDecl extends PullDecl {
		private _semanticInfoChain;
		private _isExternalModule;
		private _fileName;
		constructor(name: string, fileName: string, kind: PullElementKind, declFlags: PullElementFlags, span: TextSpan, semanticInfoChain: SemanticInfoChain, isExternalModule: boolean);
		public fileName(): string;
		public getParentPath(): PullDecl[];
		public getParentDecl(): PullDecl;
		public semanticInfoChain(): SemanticInfoChain;
		public isExternalModule(): boolean;
		public getEnclosingDecl(): RootPullDecl;
	}
	class NormalPullDecl extends PullDecl {
		private parentDecl;
		private parentPath;
		constructor(declName: string, displayName: string, kind: PullElementKind, declFlags: PullElementFlags, parentDecl: PullDecl, span: TextSpan, addToParent?: boolean);
		public fileName(): string;
		public getParentDecl(): PullDecl;
		public getParentPath(): PullDecl[];
		public semanticInfoChain(): SemanticInfoChain;
		public isExternalModule(): boolean;
		public getEnclosingDecl(): PullDecl;
	}
	class PullEnumElementDecl extends NormalPullDecl {
		public constantValue: number;
		constructor(declName: string, displayName: string, parentDecl: PullDecl, span: TextSpan);
	}
	class PullFunctionExpressionDecl extends NormalPullDecl {
		private functionExpressionName;
		constructor(expressionName: string, declFlags: PullElementFlags, parentDecl: PullDecl, span: TextSpan, displayName?: string);
		public getFunctionExpressionName(): string;
	}
	class PullSynthesizedDecl extends NormalPullDecl {
		private _semanticInfoChain;
		constructor(declName: string, displayName: string, kind: PullElementKind, declFlags: PullElementFlags, parentDecl: PullDecl, span: TextSpan, semanticInfoChain: SemanticInfoChain);
		public semanticInfoChain(): SemanticInfoChain;
		public isSynthesized(): boolean;
	}
	class PullDeclGroup {
		public name: string;
		private _decls;
		constructor(name: string);
		public addDecl(decl: PullDecl): void;
		public getDecls(): PullDecl[];
	}
	var pullSymbolID: number;
	var globalTyvarID: number;
	var sentinelEmptyArray: any[];
	class PullSymbol {
		public pullSymbolID: number;
		public name: string;
		public kind: PullElementKind;
		private _container;
		public type: PullTypeSymbol;
		private _declarations;
		public isResolved: boolean;
		public isOptional: boolean;
		public inResolution: boolean;
		private isSynthesized;
		public isVarArg: boolean;
		private rootSymbol;
		private _enclosingSignature;
		private _docComments;
		public isPrinting: boolean;
		public isAny(): boolean;
		public isType(): boolean;
		public isTypeReference(): boolean;
		public isSignature(): boolean;
		public isArrayNamedTypeReference(): boolean;
		public isPrimitive(): boolean;
		public isAccessor(): boolean;
		public isError(): boolean;
		public isInterface(): boolean;
		public isMethod(): boolean;
		public isProperty(): boolean;
		public isAlias(): boolean;
		public isContainer(): boolean;
		constructor(name: string, declKind: PullElementKind);
		private findAliasedType(scopeSymbol, skipScopeSymbolAliasesLookIn?, lookIntoOnlyExportedAlias?, aliasSymbols?, visitedScopeDeclarations?);
		public getExternalAliasedSymbols(scopeSymbol: PullSymbol): PullTypeAliasSymbol[];
		private isExternalModuleReferenceAlias(aliasSymbol);
		private getExportedInternalAliasSymbol(scopeSymbol);
		public getAliasSymbolName(scopeSymbol: PullSymbol, aliasNameGetter: (symbol: PullTypeAliasSymbol) => string, aliasPartsNameGetter: (symbol: PullTypeAliasSymbol) => string, skipInternalAlias?: boolean): string;
		public _getResolver(): PullTypeResolver;
		public _resolveDeclaredSymbol(): PullSymbol;
		/** Use getName for type checking purposes, and getDisplayName to report an error or display info to the user.
		* They will differ when the identifier is an escaped unicode character or the identifier "__proto__".
		*/
		public getName(scopeSymbol?: PullSymbol, useConstraintInName?: boolean): string;
		public getDisplayName(scopeSymbol?: PullSymbol, useConstraintInName?: boolean, skipInternalAliasName?: boolean): string;
		public getIsSpecialized(): boolean;
		public getRootSymbol(): PullSymbol;
		public setRootSymbol(symbol: PullSymbol): void;
		public setIsSynthesized(value?: boolean): void;
		public getIsSynthesized(): boolean;
		public setEnclosingSignature(signature: PullSignatureSymbol): void;
		public getEnclosingSignature(): PullSignatureSymbol;
		public addDeclaration(decl: PullDecl): void;
		public getDeclarations(): PullDecl[];
		public hasDeclaration(decl: PullDecl): boolean;
		public setContainer(containerSymbol: PullTypeSymbol): void;
		public getContainer(): PullTypeSymbol;
		public setResolved(): void;
		public startResolving(): void;
		public setUnresolved(): void;
		public anyDeclHasFlag(flag: PullElementFlags): boolean;
		public allDeclsHaveFlag(flag: PullElementFlags): boolean;
		public pathToRoot(): PullSymbol[];
		public findCommonAncestorPath(b: PullSymbol): PullSymbol[];
		public toString(scopeSymbol?: PullSymbol, useConstraintInName?: boolean): string;
		public getNamePartForFullName(): string;
		public fullName(scopeSymbol?: PullSymbol): string;
		public getScopedName(scopeSymbol?: PullSymbol, skipTypeParametersInName?: boolean, useConstraintInName?: boolean, skipInternalAliasName?: boolean): string;
		public getScopedNameEx(scopeSymbol?: PullSymbol, skipTypeParametersInName?: boolean, useConstraintInName?: boolean, getPrettyTypeName?: boolean, getTypeParamMarkerInfo?: boolean, skipInternalAliasName?: boolean): MemberName;
		public getTypeName(scopeSymbol?: PullSymbol, getPrettyTypeName?: boolean): string;
		public getTypeNameEx(scopeSymbol?: PullSymbol, getPrettyTypeName?: boolean): MemberName;
		private getTypeNameForFunctionSignature(prefix, scopeSymbol?, getPrettyTypeName?);
		public getNameAndTypeName(scopeSymbol?: PullSymbol): string;
		public getNameAndTypeNameEx(scopeSymbol?: PullSymbol): MemberName;
		static getTypeParameterString(typars: PullTypeSymbol[], scopeSymbol?: PullSymbol, useContraintInName?: boolean): string;
		static getTypeParameterStringEx(typeParameters: PullTypeSymbol[], scopeSymbol?: PullSymbol, getTypeParamMarkerInfo?: boolean, useContraintInName?: boolean): MemberNameArray;
		static getIsExternallyVisible(symbol: PullSymbol, fromIsExternallyVisibleSymbol: PullSymbol, inIsExternallyVisibleSymbols: PullSymbol[]): boolean;
		public isExternallyVisible(inIsExternallyVisibleSymbols?: PullSymbol[]): boolean;
		private getDocCommentsOfDecl(decl);
		private getDocCommentArray(symbol);
		private static getDefaultConstructorSymbolForDocComments(classSymbol);
		private getDocCommentText(comments);
		private getDocCommentTextValue(comment);
		public docComments(useConstructorAsClass?: boolean): string;
		private getParameterDocCommentText(param, fncDocComments);
		private cleanJSDocComment(content, spacesToRemove?);
		private consumeLeadingSpace(line, startIndex, maxSpacesToRemove?);
		private isSpaceChar(line, index);
		private cleanDocCommentLine(line, jsDocStyleComment, jsDocLineSpaceToRemove?);
	}
	class PullSignatureSymbol extends PullSymbol {
		private _memberTypeParameterNameCache;
		private _stringConstantOverload;
		public parameters: PullSymbol[];
		public typeParameters: PullTypeParameterSymbol[];
		public returnType: PullTypeSymbol;
		public functionType: PullTypeSymbol;
		public hasOptionalParam: boolean;
		public nonOptionalParamCount: number;
		public hasVarArgs: boolean;
		public hasAGenericParameter: boolean;
		public hasBeenChecked: boolean;
		public inWrapCheck: boolean;
		constructor(kind: PullElementKind);
		public isDefinition(): boolean;
		public isGeneric(): boolean;
		public addParameter(parameter: PullSymbol, isOptional?: boolean): void;
		public addTypeParameter(typeParameter: PullTypeParameterSymbol): void;
		public getTypeParameters(): PullTypeParameterSymbol[];
		public findTypeParameter(name: string): PullTypeParameterSymbol;
		public isStringConstantOverloadSignature(): boolean;
		static getSignatureTypeMemberName(candidateSignature: PullSignatureSymbol, signatures: PullSignatureSymbol[], scopeSymbol: PullSymbol): MemberNameArray;
		static getSignaturesTypeNameEx(signatures: PullSignatureSymbol[], prefix: string, shortform: boolean, brackets: boolean, scopeSymbol?: PullSymbol, getPrettyTypeName?: boolean, candidateSignature?: PullSignatureSymbol): MemberName[];
		public toString(scopeSymbol?: PullSymbol, useConstraintInName?: boolean): string;
		public getSignatureTypeNameEx(prefix: string, shortform: boolean, brackets: boolean, scopeSymbol?: PullSymbol, getParamMarkerInfo?: boolean, getTypeParamMarkerInfo?: boolean): MemberNameArray;
		public wrapsSomeTypeParameter(typeParameterArgumentMap: PullTypeSymbol[]): boolean;
		public wrapsSomeNestedTypeIntoInfiniteExpansion(typeBeingWrapped: PullTypeSymbol, isCheckingTypeArgumentList: boolean, knownWrapMap: IBitMatrix): boolean;
	}
	class PullTypeSymbol extends PullSymbol {
		private _members;
		private _enclosedMemberTypes;
		private _enclosedMemberContainers;
		private _typeParameters;
		private _specializedVersionsOfThisType;
		private _arrayVersionOfThisType;
		private _implementedTypes;
		private _extendedTypes;
		private _typesThatExplicitlyImplementThisType;
		private _typesThatExtendThisType;
		private _callSignatures;
		private _allCallSignatures;
		private _constructSignatures;
		private _indexSignatures;
		private _allIndexSignatures;
		private _memberNameCache;
		private _enclosedTypeNameCache;
		private _enclosedContainerCache;
		private _typeParameterNameCache;
		private _containedNonMemberNameCache;
		private _containedNonMemberTypeNameCache;
		private _containedNonMemberContainerCache;
		private _simpleInstantiationCache;
		private _complexInstantiationCache;
		private _hasGenericSignature;
		private _hasGenericMember;
		private _hasBaseTypeConflict;
		private _knownBaseTypeCount;
		private _associatedContainerTypeSymbol;
		private _constructorMethod;
		private _hasDefaultConstructor;
		private _functionSymbol;
		private _inMemberTypeNameEx;
		public inSymbolPrivacyCheck: boolean;
		public inWrapCheck: boolean;
		public typeReference: PullTypeReferenceSymbol;
		constructor(name: string, kind: PullElementKind);
		private _isArrayNamedTypeReference;
		public isArrayNamedTypeReference(): boolean;
		private computeIsArrayNamedTypeReference();
		public isType(): boolean;
		public isClass(): boolean;
		public isFunction(): boolean;
		public isConstructor(): boolean;
		public isTypeParameter(): boolean;
		public isTypeVariable(): boolean;
		public isError(): boolean;
		public isEnum(): boolean;
		public getTypeParameterArgumentMap(): PullTypeSymbol[];
		public isObject(): boolean;
		public getKnownBaseTypeCount(): number;
		public resetKnownBaseTypeCount(): void;
		public incrementKnownBaseCount(): void;
		public setHasBaseTypeConflict(): void;
		public hasBaseTypeConflict(): boolean;
		public hasMembers(): boolean;
		public setHasGenericSignature(): void;
		public getHasGenericSignature(): boolean;
		public setHasGenericMember(): void;
		public getHasGenericMember(): boolean;
		public setAssociatedContainerType(type: PullTypeSymbol): void;
		public getAssociatedContainerType(): PullTypeSymbol;
		public getArrayType(): PullTypeSymbol;
		public getElementType(): PullTypeSymbol;
		public setArrayType(arrayType: PullTypeSymbol): void;
		public getFunctionSymbol(): PullSymbol;
		public setFunctionSymbol(symbol: PullSymbol): void;
		public findContainedNonMember(name: string): PullSymbol;
		public findContainedNonMemberType(typeName: string, kind?: PullElementKind): PullTypeSymbol;
		public findContainedNonMemberContainer(containerName: string, kind?: PullElementKind): PullTypeSymbol;
		public addMember(memberSymbol: PullSymbol): void;
		public addEnclosedMemberType(enclosedType: PullTypeSymbol): void;
		public addEnclosedMemberContainer(enclosedContainer: PullTypeSymbol): void;
		public addEnclosedNonMember(enclosedNonMember: PullSymbol): void;
		public addEnclosedNonMemberType(enclosedNonMemberType: PullTypeSymbol): void;
		public addEnclosedNonMemberContainer(enclosedNonMemberContainer: PullTypeSymbol): void;
		public addTypeParameter(typeParameter: PullTypeParameterSymbol): void;
		public addConstructorTypeParameter(typeParameter: PullTypeParameterSymbol): void;
		public getMembers(): PullSymbol[];
		public setHasDefaultConstructor(hasOne?: boolean): void;
		public getHasDefaultConstructor(): boolean;
		public getConstructorMethod(): PullSymbol;
		public setConstructorMethod(constructorMethod: PullSymbol): void;
		public getTypeParameters(): PullTypeParameterSymbol[];
		public isGeneric(): boolean;
		private canUseSimpleInstantiationCache(substitutingTypes);
		public addSpecialization(specializedVersionOfThisType: PullTypeSymbol, substitutingTypes: PullTypeSymbol[]): void;
		public getSpecialization(substitutingTypes: PullTypeSymbol[]): PullTypeSymbol;
		public getKnownSpecializations(): PullTypeSymbol[];
		public getTypeArguments(): PullTypeSymbol[];
		public getTypeArgumentsOrTypeParameters(): PullTypeSymbol[];
		public addCallSignature(callSignature: PullSignatureSymbol): void;
		public addConstructSignature(constructSignature: PullSignatureSymbol): void;
		public addIndexSignature(indexSignature: PullSignatureSymbol): void;
		private addUnhiddenSignaturesFromBaseType(derivedTypeSignatures, baseTypeSignatures, signaturesBeingAggregated);
		public hasOwnCallSignatures(): boolean;
		public getCallSignatures(): PullSignatureSymbol[];
		public hasOwnConstructSignatures(): boolean;
		public getConstructSignatures(): PullSignatureSymbol[];
		public hasOwnIndexSignatures(): boolean;
		public getOwnIndexSignatures(): PullSignatureSymbol[];
		public getIndexSignatures(): PullSignatureSymbol[];
		public addImplementedType(implementedType: PullTypeSymbol): void;
		public getImplementedTypes(): PullTypeSymbol[];
		public addExtendedType(extendedType: PullTypeSymbol): void;
		public getExtendedTypes(): PullTypeSymbol[];
		public addTypeThatExtendsThisType(type: PullTypeSymbol): void;
		public getTypesThatExtendThisType(): PullTypeSymbol[];
		public addTypeThatExplicitlyImplementsThisType(type: PullTypeSymbol): void;
		public getTypesThatExplicitlyImplementThisType(): PullTypeSymbol[];
		public hasBase(potentialBase: PullTypeSymbol, visited?: PullSymbol[]): boolean;
		public isValidBaseKind(baseType: PullTypeSymbol, isExtendedType: boolean): boolean;
		public findMember(name: string, lookInParent: boolean): PullSymbol;
		public findNestedType(name: string, kind?: PullElementKind): PullTypeSymbol;
		public findNestedContainer(name: string, kind?: PullElementKind): PullTypeSymbol;
		public getAllMembers(searchDeclKind: PullElementKind, memberVisiblity: GetAllMembersVisiblity): PullSymbol[];
		public findTypeParameter(name: string): PullTypeParameterSymbol;
		public setResolved(): void;
		public getNamePartForFullName(): string;
		public getScopedName(scopeSymbol?: PullSymbol, skipTypeParametersInName?: boolean, useConstraintInName?: boolean, skipInternalAliasName?: boolean): string;
		public isNamedTypeSymbol(): boolean;
		public toString(scopeSymbol?: PullSymbol, useConstraintInName?: boolean): string;
		public getScopedNameEx(scopeSymbol?: PullSymbol, skipTypeParametersInName?: boolean, useConstraintInName?: boolean, getPrettyTypeName?: boolean, getTypeParamMarkerInfo?: boolean, skipInternalAliasName?: boolean): MemberName;
		public hasOnlyOverloadCallSignatures(): boolean;
		public getTypeOfSymbol(): PullSymbol;
		private getMemberTypeNameEx(topLevel, scopeSymbol?, getPrettyTypeName?);
		public getGenerativeTypeClassification(enclosingType: PullTypeSymbol): GenerativeTypeClassification;
		public wrapsSomeTypeParameter(typeParameterArgumentMap: CandidateInferenceInfo[]): boolean;
		public wrapsSomeTypeParameter(typeParameterArgumentMap: PullTypeSymbol[]): boolean;
		public wrapsSomeNestedTypeIntoInfiniteExpansion(typeBeingWrapped: PullTypeSymbol): boolean;
		private isTypeEquivalentToRootSymbol();
		private isTypeBeingWrapped(typeBeingWrapped);
		private anyRootTypeBeingWrapped(typeBeingWrapped);
		public _wrapsSomeNestedTypeIntoInfiniteExpansionRecurse(typeBeingWrapped: PullTypeSymbol, isCheckingTypeArgumentList: boolean, knownWrapMap: IBitMatrix): boolean;
		private _wrapsSomeNestedTypeIntoInfiniteExpansionWorker(typeBeingWrapped, isCheckingTypeArgumentList, knownWrapMap);
	}
	class PullPrimitiveTypeSymbol extends PullTypeSymbol {
		constructor(name: string);
		public isAny(): boolean;
		public isStringConstant(): boolean;
		public setUnresolved(): void;
	}
	class PullStringConstantTypeSymbol extends PullPrimitiveTypeSymbol {
		constructor(name: string);
		public isStringConstant(): boolean;
	}
	class PullErrorTypeSymbol extends PullPrimitiveTypeSymbol {
		private anyType;
		constructor(anyType: PullTypeSymbol, name: string);
		public isError(): boolean;
		public getName(scopeSymbol?: PullSymbol, useConstraintInName?: boolean): string;
		public getDisplayName(scopeSymbol?: PullSymbol, useConstraintInName?: boolean, skipInternalAliasName?: boolean): string;
		public toString(scopeSymbol?: PullSymbol, useConstraintInName?: boolean): string;
	}
	class PullContainerSymbol extends PullTypeSymbol {
		public instanceSymbol: PullSymbol;
		private assignedValue;
		private assignedType;
		private assignedContainer;
		constructor(name: string, kind: PullElementKind);
		public isContainer(): boolean;
		public setInstanceSymbol(symbol: PullSymbol): void;
		public getInstanceSymbol(): PullSymbol;
		public setExportAssignedValueSymbol(symbol: PullSymbol): void;
		public getExportAssignedValueSymbol(): PullSymbol;
		public setExportAssignedTypeSymbol(type: PullTypeSymbol): void;
		public getExportAssignedTypeSymbol(): PullTypeSymbol;
		public setExportAssignedContainerSymbol(container: PullContainerSymbol): void;
		public getExportAssignedContainerSymbol(): PullContainerSymbol;
		public hasExportAssignment(): boolean;
		static usedAsSymbol(containerSymbol: PullSymbol, symbol: PullSymbol): boolean;
		public getInstanceType(): PullTypeSymbol;
	}
	class PullTypeAliasSymbol extends PullTypeSymbol {
		private _assignedValue;
		private _assignedType;
		private _assignedContainer;
		private _isUsedAsValue;
		private _typeUsedExternally;
		private retrievingExportAssignment;
		constructor(name: string);
		public typeUsedExternally(): boolean;
		public isUsedAsValue(): boolean;
		public setTypeUsedExternally(value: boolean): void;
		public setIsUsedAsValue(value: boolean): void;
		public assignedValue(): PullSymbol;
		public assignedType(): PullTypeSymbol;
		public assignedContainer(): PullContainerSymbol;
		public isAlias(): boolean;
		public isContainer(): boolean;
		public setAssignedValueSymbol(symbol: PullSymbol): void;
		public getExportAssignedValueSymbol(): PullSymbol;
		public setAssignedTypeSymbol(type: PullTypeSymbol): void;
		public getExportAssignedTypeSymbol(): PullTypeSymbol;
		public setAssignedContainerSymbol(container: PullContainerSymbol): void;
		public getExportAssignedContainerSymbol(): PullContainerSymbol;
		public getMembers(): PullSymbol[];
		public getCallSignatures(): PullSignatureSymbol[];
		public getConstructSignatures(): PullSignatureSymbol[];
		public getIndexSignatures(): PullSignatureSymbol[];
		public findMember(name: string): PullSymbol;
		public findNestedType(name: string): PullTypeSymbol;
		public findNestedContainer(name: string): PullTypeSymbol;
		public getAllMembers(searchDeclKind: PullElementKind, memberVisibility: GetAllMembersVisiblity): PullSymbol[];
	}
	class PullDefinitionSignatureSymbol extends PullSignatureSymbol {
		public isDefinition(): boolean;
	}
	class PullTypeParameterSymbol extends PullTypeSymbol {
		private _isFunctionTypeParameter;
		private _constraint;
		constructor(name: string, _isFunctionTypeParameter: boolean);
		public isTypeParameter(): boolean;
		public isFunctionTypeParameter(): boolean;
		public setConstraint(constraintType: PullTypeSymbol): void;
		public getConstraint(): PullTypeSymbol;
		public getCallSignatures(): PullSignatureSymbol[];
		public getConstructSignatures(): PullSignatureSymbol[];
		public getIndexSignatures(): PullSignatureSymbol[];
		public isGeneric(): boolean;
		public fullName(scopeSymbol?: PullSymbol): string;
		public getName(scopeSymbol?: PullSymbol, useConstraintInName?: boolean): string;
		public getDisplayName(scopeSymbol?: PullSymbol, useConstraintInName?: boolean, skipInternalAliasName?: boolean): string;
		public isExternallyVisible(inIsExternallyVisibleSymbols?: PullSymbol[]): boolean;
	}
	class PullAccessorSymbol extends PullSymbol {
		private _getterSymbol;
		private _setterSymbol;
		constructor(name: string);
		public isAccessor(): boolean;
		public setSetter(setter: PullSymbol): void;
		public getSetter(): PullSymbol;
		public setGetter(getter: PullSymbol): void;
		public getGetter(): PullSymbol;
	}
	function getIDForTypeSubstitutions(types: PullTypeSymbol[]): string;
	enum GetAllMembersVisiblity {
		all = 0,
		internallyVisible = 1,
		externallyVisible = 2,
	}
	class CandidateInferenceInfo {
		public typeParameter: PullTypeParameterSymbol;
		public isFixed: boolean;
		public inferenceCandidates: PullTypeSymbol[];
		public addCandidate(candidate: PullTypeSymbol): void;
	}
	class ArgumentInferenceContext {
		public inferenceCache: IBitMatrix;
		public candidateCache: CandidateInferenceInfo[];
		public fixedParameterTypes: PullTypeSymbol[];
		public resolver: PullTypeResolver;
		public argumentASTs: ISeparatedSyntaxList2;
		constructor(resolver: PullTypeResolver, argumentASTs: ISeparatedSyntaxList2);
		constructor(resolver: PullTypeResolver, fixedParameterTypes: PullTypeSymbol[]);
		public alreadyRelatingTypes(objectType: PullTypeSymbol, parameterType: PullTypeSymbol): boolean;
		public resetRelationshipCache(): void;
		public addInferenceRoot(param: PullTypeParameterSymbol): void;
		public getInferenceInfo(param: PullTypeParameterSymbol): CandidateInferenceInfo;
		public addCandidateForInference(param: PullTypeParameterSymbol, candidate: PullTypeSymbol, fix: boolean): void;
		public getInferenceArgumentCount(): number;
		public getArgumentTypeSymbolAtIndex(i: number, context: PullTypeResolutionContext): PullTypeSymbol;
		public getInferenceCandidates(): PullTypeSymbol[][];
		public inferArgumentTypes(resolver: PullTypeResolver, context: PullTypeResolutionContext): {
			results: {
				param: PullTypeParameterSymbol;
				type: PullTypeSymbol;
			}[];
			unfit: boolean;
		};
	}
	class PullContextualTypeContext {
		public contextualType: PullTypeSymbol;
		public provisional: boolean;
		public substitutions: PullTypeSymbol[];
		public provisionallyTypedSymbols: PullSymbol[];
		public hasProvisionalErrors: boolean;
		private astSymbolMap;
		constructor(contextualType: PullTypeSymbol, provisional: boolean, substitutions: PullTypeSymbol[]);
		public recordProvisionallyTypedSymbol(symbol: PullSymbol): void;
		public invalidateProvisionallyTypedSymbols(): void;
		public setSymbolForAST(ast: AST, symbol: PullSymbol): void;
		public getSymbolForAST(ast: AST): PullSymbol;
	}
	class PullTypeResolutionContext {
		private resolver;
		public inTypeCheck: boolean;
		public fileName: string;
		private contextStack;
		private typeCheckedNodes;
		constructor(resolver: PullTypeResolver, inTypeCheck?: boolean, fileName?: string);
		public setTypeChecked(ast: AST): void;
		public canTypeCheckAST(ast: AST): boolean;
		public pushContextualType(type: PullTypeSymbol, provisional: boolean, substitutions: PullTypeSymbol[]): void;
		public popContextualType(): PullContextualTypeContext;
		public hasProvisionalErrors(): boolean;
		public findSubstitution(type: PullTypeSymbol): PullTypeSymbol;
		public getContextualType(): PullTypeSymbol;
		public inProvisionalResolution(): boolean;
		private inBaseTypeResolution;
		public isInBaseTypeResolution(): boolean;
		public startBaseTypeResolution(): boolean;
		public doneBaseTypeResolution(wasInBaseTypeResolution: boolean): void;
		public setTypeInContext(symbol: PullSymbol, type: PullTypeSymbol): void;
		public postDiagnostic(diagnostic: Diagnostic): void;
		public typeCheck(): boolean;
		public setSymbolForAST(ast: AST, symbol: PullSymbol): void;
		public getSymbolForAST(ast: AST): PullSymbol;
	}
	interface IPullTypeCollection {
		getLength(): number;
		getTypeAtIndex(index: number): PullTypeSymbol;
	}
	class PullAdditionalCallResolutionData {
		public targetSymbol: PullSymbol;
		public resolvedSignatures: PullSignatureSymbol[];
		public candidateSignature: PullSignatureSymbol;
		public actualParametersContextTypeSymbols: PullTypeSymbol[];
		public diagnosticsFromOverloadResolution: Diagnostic[];
	}
	class PullAdditionalObjectLiteralResolutionData {
		public membersContextTypeSymbols: PullTypeSymbol[];
	}
	class PullTypeResolver {
		private compilationSettings;
		public semanticInfoChain: SemanticInfoChain;
		private _cachedArrayInterfaceType;
		private _cachedNumberInterfaceType;
		private _cachedStringInterfaceType;
		private _cachedBooleanInterfaceType;
		private _cachedObjectInterfaceType;
		private _cachedFunctionInterfaceType;
		private _cachedIArgumentsInterfaceType;
		private _cachedRegExpInterfaceType;
		private _cachedAnyTypeArgs;
		private typeCheckCallBacks;
		private postTypeCheckWorkitems;
		private _cachedFunctionArgumentsSymbol;
		private assignableCache;
		private subtypeCache;
		private identicalCache;
		constructor(compilationSettings: ImmutableCompilationSettings, semanticInfoChain: SemanticInfoChain);
		private cachedArrayInterfaceType();
		public getArrayNamedType(): PullTypeSymbol;
		private cachedNumberInterfaceType();
		private cachedStringInterfaceType();
		private cachedBooleanInterfaceType();
		private cachedObjectInterfaceType();
		private cachedFunctionInterfaceType();
		private cachedIArgumentsInterfaceType();
		private cachedRegExpInterfaceType();
		private cachedFunctionArgumentsSymbol();
		private setTypeChecked(ast, context);
		private canTypeCheckAST(ast, context);
		private setSymbolForAST(ast, symbol, context);
		private getSymbolForAST(ast, context);
		public getASTForDecl(decl: PullDecl): AST;
		public getNewErrorTypeSymbol(name?: string): PullErrorTypeSymbol;
		public getEnclosingDecl(decl: PullDecl): PullDecl;
		private getExportedMemberSymbol(symbol, parent);
		private getMemberSymbol(symbolName, declSearchKind, parent);
		private getSymbolFromDeclPath(symbolName, declPath, declSearchKind);
		private getVisibleDeclsFromDeclPath(declPath, declSearchKind);
		private addFilteredDecls(decls, declSearchKind, result);
		public getVisibleDecls(enclosingDecl: PullDecl): PullDecl[];
		public getVisibleContextSymbols(enclosingDecl: PullDecl, context: PullTypeResolutionContext): PullSymbol[];
		public getVisibleMembersFromExpression(expression: AST, enclosingDecl: PullDecl, context: PullTypeResolutionContext): PullSymbol[];
		private isAnyOrEquivalent(type);
		private resolveExternalModuleReference(idText, currentFileName);
		public resolveDeclaredSymbol(symbol: PullSymbol, context?: PullTypeResolutionContext): PullSymbol;
		private resolveDeclaredSymbolWorker(symbol, context);
		private resolveOtherDeclarations(astName, context);
		private resolveSourceUnit(sourceUnit, context);
		private typeCheckSourceUnit(sourceUnit, context);
		private resolveEnumDeclaration(ast, context);
		private typeCheckEnumDeclaration(ast, context);
		private postTypeCheckEnumDeclaration(ast, context);
		private resolveModuleDeclaration(ast, context);
		private ensureAllSymbolsAreBound(containerSymbol);
		private resolveModuleSymbol(containerSymbol, context, moduleDeclAST, moduleDeclNameAST, sourceUnitAST);
		private resolveFirstExportAssignmentStatement(moduleElements, context);
		private resolveSingleModuleDeclaration(ast, astName, context);
		private typeCheckModuleDeclaration(ast, context);
		private typeCheckSingleModuleDeclaration(ast, astName, context);
		private postTypeCheckModuleDeclaration(ast, context);
		private isTypeRefWithoutTypeArgs(term);
		public createInstantiatedType(type: PullTypeSymbol, typeArguments: PullTypeSymbol[]): PullTypeSymbol;
		private resolveReferenceTypeDeclaration(classOrInterface, name, heritageClauses, context);
		private resolveClassDeclaration(classDeclAST, context);
		private typeCheckTypeParametersOfTypeDeclaration(classOrInterface, context);
		private typeCheckClassDeclaration(classDeclAST, context);
		private postTypeCheckClassDeclaration(classDeclAST, context);
		private resolveTypeSymbolSignatures(typeSymbol, context);
		private resolveInterfaceDeclaration(interfaceDeclAST, context);
		private typeCheckInterfaceDeclaration(interfaceDeclAST, context);
		private filterSymbol(symbol, kind, enclosingDecl, context);
		private getMemberSymbolOfKind(symbolName, kind, pullTypeSymbol, enclosingDecl, context);
		private resolveIdentifierOfInternalModuleReference(importDecl, identifier, moduleSymbol, enclosingDecl, context);
		private resolveModuleReference(importDecl, moduleNameExpr, enclosingDecl, context, declPath);
		private resolveInternalModuleReference(importStatementAST, context);
		private resolveImportDeclaration(importStatementAST, context);
		private typeCheckImportDeclaration(importStatementAST, context);
		private postTypeCheckImportDeclaration(importStatementAST, context);
		private resolveExportAssignmentStatement(exportAssignmentAST, context);
		private resolveAnyFunctionTypeSignature(funcDeclAST, typeParameters, parameterList, returnTypeAnnotation, context);
		private resolveFunctionTypeSignatureParameter(argDeclAST, signature, enclosingDecl, context);
		private resolveFunctionExpressionParameter(argDeclAST, id, typeExpr, equalsValueClause, contextParam, enclosingDecl, context);
		private checkNameForCompilerGeneratedDeclarationCollision(astWithName, isDeclaration, name, context, immediateThisCheck?);
		private hasRestParameterCodeGen(someFunctionDecl);
		private checkArgumentsCollides(ast, context);
		private checkIndexOfRestArgumentInitializationCollides(ast, context);
		private checkExternalModuleRequireExportsCollides(ast, name, context);
		private resolveObjectTypeTypeReference(objectType, context);
		private typeCheckObjectTypeTypeReference(objectType, context);
		private resolveTypeAnnotation(typeAnnotation, context);
		public resolveTypeReference(typeRef: AST, context: PullTypeResolutionContext): PullTypeSymbol;
		private computeTypeReferenceSymbol(term, context);
		private genericTypeIsUsedWithoutRequiredTypeArguments(typeSymbol, term, context);
		private resolveMemberVariableDeclaration(varDecl, context);
		private resolvePropertySignature(varDecl, context);
		private resolveVariableDeclarator(varDecl, context);
		private resolveParameterList(list, context);
		private resolveParameter(parameter, context);
		private getEnumTypeSymbol(enumElement, context);
		private resolveEnumElement(enumElement, context);
		private typeCheckEnumElement(enumElement, context);
		private resolveEqualsValueClause(clause, isContextuallyTyped, context);
		private resolveVariableDeclaratorOrParameterOrEnumElement(varDeclOrParameter, modifiers, name, typeExpr, init, context);
		private resolveAndTypeCheckVariableDeclarationTypeExpr(varDeclOrParameter, name, typeExpr, context);
		private resolveAndTypeCheckVariableDeclaratorOrParameterInitExpr(varDeclOrParameter, name, typeExpr, init, context, typeExprSymbol);
		private typeCheckPropertySignature(varDecl, context);
		private typeCheckMemberVariableDeclaration(varDecl, context);
		private typeCheckVariableDeclarator(varDecl, context);
		private typeCheckParameter(parameter, context);
		private typeCheckVariableDeclaratorOrParameterOrEnumElement(varDeclOrParameter, modifiers, name, typeExpr, init, context);
		private isForInVariableDeclarator(ast);
		private checkSuperCaptureVariableCollides(superAST, isDeclaration, context);
		private checkThisCaptureVariableCollides(_thisAST, isDeclaration, context);
		private postTypeCheckVariableDeclaratorOrParameter(varDeclOrParameter, context);
		private resolveTypeParameterDeclaration(typeParameterAST, context);
		private typeCheckTypeParameterDeclaration(typeParameterAST, context);
		private resolveConstraint(constraint, context);
		private resolveFunctionBodyReturnTypes(funcDeclAST, block, bodyExpression, signature, useContextualType, enclosingDecl, context);
		private typeCheckConstructorDeclaration(funcDeclAST, context);
		private constructorHasSuperCall(constructorDecl);
		private typeCheckFunctionExpression(funcDecl, context);
		private typeCheckCallSignature(funcDecl, context);
		private typeCheckConstructSignature(funcDecl, context);
		private typeCheckFunctionDeclaration(funcDeclAST, isStatic, name, typeParameters, parameters, returnTypeAnnotation, block, context);
		private typeCheckIndexSignature(funcDeclAST, context);
		private postTypeCheckFunctionDeclaration(funcDeclAST, context);
		private resolveReturnTypeAnnotationOfFunctionDeclaration(funcDeclAST, returnTypeAnnotation, context);
		private resolveMemberFunctionDeclaration(funcDecl, context);
		private resolveCallSignature(funcDecl, context);
		private resolveConstructSignature(funcDecl, context);
		private resolveMethodSignature(funcDecl, context);
		private resolveAnyFunctionDeclaration(funcDecl, context);
		private resolveFunctionExpression(funcDecl, isContextuallyTyped, context);
		private resolveSimpleArrowFunctionExpression(funcDecl, isContextuallyTyped, context);
		private resolveParenthesizedArrowFunctionExpression(funcDecl, isContextuallyTyped, context);
		private getEnclosingClassDeclaration(ast);
		private resolveConstructorDeclaration(funcDeclAST, context);
		private resolveIndexMemberDeclaration(ast, context);
		private resolveIndexSignature(funcDeclAST, context);
		private resolveFunctionDeclaration(funcDeclAST, isStatic, name, typeParameters, parameterList, returnTypeAnnotation, block, context);
		private resolveGetterReturnTypeAnnotation(getterFunctionDeclarationAst, enclosingDecl, context);
		private resolveSetterArgumentTypeAnnotation(setterFunctionDeclarationAst, enclosingDecl, context);
		private resolveAccessorDeclaration(funcDeclAst, context);
		private typeCheckAccessorDeclaration(funcDeclAst, context);
		private resolveGetAccessorDeclaration(funcDeclAST, parameters, returnTypeAnnotation, block, setterAnnotatedType, context);
		private checkIfGetterAndSetterTypeMatch(funcDeclAST, context);
		private typeCheckGetAccessorDeclaration(funcDeclAST, context);
		static hasSetAccessorParameterTypeAnnotation(setAccessor: SetAccessor): boolean;
		private resolveSetAccessorDeclaration(funcDeclAST, parameterList, context);
		private typeCheckSetAccessorDeclaration(funcDeclAST, context);
		private resolveList(list, context);
		private resolveSeparatedList(list, context);
		private resolveVoidExpression(ast, context);
		private resolveLogicalOperation(ast, context);
		private typeCheckLogicalOperation(binex, context);
		private resolveLogicalNotExpression(ast, context);
		private resolveUnaryArithmeticOperation(ast, context);
		private resolvePostfixUnaryExpression(ast, context);
		private isAnyOrNumberOrEnum(type);
		private typeCheckUnaryArithmeticOperation(unaryExpression, context);
		private typeCheckPostfixUnaryExpression(unaryExpression, context);
		private resolveBinaryArithmeticExpression(binaryExpression, context);
		private typeCheckBinaryArithmeticExpression(binaryExpression, context);
		private resolveTypeOfExpression(ast, context);
		private resolveThrowStatement(ast, context);
		private resolveDeleteExpression(ast, context);
		private resolveInstanceOfExpression(ast, context);
		private typeCheckInstanceOfExpression(binaryExpression, context);
		private resolveCommaExpression(commaExpression, context);
		private resolveInExpression(ast, context);
		private typeCheckInExpression(binaryExpression, context);
		private resolveForStatement(ast, context);
		private resolveForInStatement(forInStatement, context);
		private typeCheckForInStatement(forInStatement, context);
		private resolveWhileStatement(ast, context);
		private typeCheckWhileStatement(ast, context);
		private resolveDoStatement(ast, context);
		private typeCheckDoStatement(ast, context);
		private resolveIfStatement(ast, context);
		private typeCheckIfStatement(ast, context);
		private resolveElseClause(ast, context);
		private typeCheckElseClause(ast, context);
		private resolveBlock(ast, context);
		private resolveVariableStatement(ast, context);
		private resolveVariableDeclarationList(ast, context);
		private resolveWithStatement(ast, context);
		private typeCheckWithStatement(ast, context);
		private resolveTryStatement(ast, context);
		private typeCheckTryStatement(ast, context);
		private resolveCatchClause(ast, context);
		private typeCheckCatchClause(ast, context);
		private resolveFinallyClause(ast, context);
		private typeCheckFinallyClause(ast, context);
		private getEnclosingFunctionDeclaration(ast);
		private resolveReturnExpression(expression, enclosingFunction, context);
		private typeCheckReturnExpression(expression, expressionType, enclosingFunction, context);
		private resolveReturnStatement(returnAST, context);
		private resolveSwitchStatement(ast, context);
		private typeCheckSwitchStatement(ast, context);
		private resolveLabeledStatement(ast, context);
		private typeCheckLabeledStatement(ast, context);
		private labelIsOnContinuableConstruct(statement);
		private resolveContinueStatement(ast, context);
		private isIterationStatement(ast);
		private isAnyFunctionExpressionOrDeclaration(ast);
		private inSwitchStatement(ast);
		private inIterationStatement(ast);
		private getEnclosingLabels(ast, breakable, crossFunctions);
		private typeCheckContinueStatement(ast, context);
		private resolveBreakStatement(ast, context);
		private typeCheckBreakStatement(ast, context);
		public resolveAST(ast: AST, isContextuallyTyped: boolean, context: PullTypeResolutionContext): PullSymbol;
		private typeCheckAST(ast, isContextuallyTyped, context);
		private processPostTypeCheckWorkItems(context);
		private postTypeCheck(ast, context);
		private resolveRegularExpressionLiteral();
		private postTypeCheckNameExpression(nameAST, context);
		private typeCheckNameExpression(nameAST, context);
		private resolveNameExpression(nameAST, context);
		private isSomeFunctionScope(declPath);
		private computeNameExpression(nameAST, context, reportDiagnostics);
		private getCurrentParameterIndexForFunction(parameter, funcDecl);
		private resolveMemberAccessExpression(dottedNameAST, context);
		private resolveDottedNameExpression(dottedNameAST, expression, name, context);
		private computeDottedNameExpression(expression, name, context, checkSuperPrivateAndStaticAccess);
		private resolveTypeNameExpression(nameAST, context);
		private computeTypeNameExpression(nameAST, context);
		private isLeftSideOfQualifiedName(ast);
		private resolveGenericTypeReference(genericTypeAST, context);
		private resolveQualifiedName(dottedNameAST, context);
		private computeQualifiedName(dottedNameAST, context);
		private shouldContextuallyTypeAnyFunctionExpression(functionExpressionAST, typeParameters, parameters, returnTypeAnnotation, context);
		private resolveAnyFunctionExpression(funcDeclAST, typeParameters, parameters, returnTypeAnnotation, block, bodyExpression, isContextuallyTyped, context);
		private typeCheckSimpleArrowFunctionExpression(arrowFunction, context);
		private typeCheckParenthesizedArrowFunctionExpression(arrowFunction, context);
		private typeCheckAnyFunctionExpression(funcDeclAST, typeParameters, returnTypeAnnotation, block, bodyExpression, context);
		private resolveThisExpression(thisExpression, context);
		private inTypeArgumentList(ast);
		private inClassExtendsHeritageClause(ast);
		private inTypeQuery(ast);
		private inArgumentListOfSuperInvocation(ast);
		private inConstructorParameterList(ast);
		private isFunctionOrNonArrowFunctionExpression(decl);
		private typeCheckThisExpression(thisExpression, context, enclosingDecl);
		private getContextualClassSymbolForEnclosingDecl(ast, enclosingDecl);
		private inStaticMemberVariableDeclaration(ast);
		private resolveSuperExpression(ast, context);
		private typeCheckSuperExpression(ast, context, enclosingDecl);
		private resolveSimplePropertyAssignment(propertyAssignment, isContextuallyTyped, context);
		private resolveFunctionPropertyAssignment(funcProp, isContextuallyTyped, context);
		private typeCheckFunctionPropertyAssignment(funcProp, isContextuallyTyped, context);
		public resolveObjectLiteralExpression(expressionAST: ObjectLiteralExpression, isContextuallyTyped: boolean, context: PullTypeResolutionContext, additionalResults?: PullAdditionalObjectLiteralResolutionData): PullSymbol;
		private bindObjectLiteralMembers(objectLiteralDeclaration, objectLiteralTypeSymbol, objectLiteralMembers, isUsingExistingSymbol, pullTypeContext);
		private resolveObjectLiteralMembers(objectLiteralDeclaration, objectLiteralTypeSymbol, objectLiteralContextualType, objectLiteralMembers, stringIndexerSignature, numericIndexerSignature, allMemberTypes, allNumericMemberTypes, boundMemberSymbols, isUsingExistingSymbol, pullTypeContext, additionalResults?);
		private computeObjectLiteralExpression(objectLitAST, isContextuallyTyped, context, additionalResults?);
		private getPropertyAssignmentName(propertyAssignment);
		private stampObjectLiteralWithIndexSignature(objectLiteralSymbol, indexerTypeCandidates, contextualIndexSignature, context);
		private resolveArrayLiteralExpression(arrayLit, isContextuallyTyped, context);
		private computeArrayLiteralExpressionSymbol(arrayLit, isContextuallyTyped, context);
		private resolveElementAccessExpression(callEx, context);
		private typeCheckElementAccessExpression(callEx, context, symbolAndDiagnostic);
		private computeElementAccessExpressionSymbolAndDiagnostic(callEx, context);
		private getBothKindsOfIndexSignatures(enclosingType, context);
		private resolveBinaryAdditionOperation(binaryExpression, context);
		private bestCommonTypeOfTwoTypes(type1, type2, context);
		private bestCommonTypeOfThreeTypes(type1, type2, type3, context);
		private resolveLogicalOrExpression(binex, isContextuallyTyped, context);
		private resolveLogicalAndExpression(binex, context);
		private computeTypeOfConditionalExpression(leftType, rightType, isContextuallyTyped, context);
		private resolveConditionalExpression(trinex, isContextuallyTyped, context);
		private conditionExpressionTypesAreValid(leftType, rightType, expressionType, isContextuallyTyped, context);
		private resolveParenthesizedExpression(ast, context);
		private resolveExpressionStatement(ast, context);
		public resolveInvocationExpression(callEx: InvocationExpression, context: PullTypeResolutionContext, additionalResults?: PullAdditionalCallResolutionData): PullSymbol;
		private typeCheckInvocationExpression(callEx, context);
		private computeInvocationExpressionSymbol(callEx, context, additionalResults);
		public resolveObjectCreationExpression(callEx: ObjectCreationExpression, context: PullTypeResolutionContext, additionalResults?: PullAdditionalCallResolutionData): PullSymbol;
		private typeCheckObjectCreationExpression(callEx, context);
		private postOverloadResolutionDiagnostics(diagnostic, additionalResults, context);
		private computeObjectCreationExpressionSymbol(callEx, context, additionalResults);
		private instantiateSignatureInContext(signatureA, signatureB, context);
		private resolveCastExpression(assertionExpression, context);
		private typeCheckCastExpression(assertionExpression, context, typeAssertionType);
		private resolveAssignmentExpression(binaryExpression, context);
		private getInstanceTypeForAssignment(lhs, type, context);
		public widenType(type: PullTypeSymbol, ast?: AST, context?: PullTypeResolutionContext): PullTypeSymbol;
		public findBestCommonType(collection: IPullTypeCollection, context: PullTypeResolutionContext, comparisonInfo?: TypeComparisonInfo): PullTypeSymbol;
		private typeIsBestCommonTypeCandidate(candidateType, collection, context);
		private typesAreIdenticalInEnclosingTypes(t1, t2, t1EnclosingType, t2EnclosingType, val?);
		public typesAreIdentical(t1: PullTypeSymbol, t2: PullTypeSymbol, val?: AST): boolean;
		private signatureGroupsAreIdentical(sg1, sg2);
		public signaturesAreIdentical(s1: PullSignatureSymbol, s2: PullSignatureSymbol, includingReturnType?: boolean): boolean;
		private substituteUpperBoundForType(type);
		private symbolsShareDeclaration(symbol1, symbol2);
		private sourceExtendsTarget(source, target, context);
		private sourceIsSubtypeOfTarget(source, target, ast, context, comparisonInfo?, isComparingInstantiatedSignatures?);
		private sourceMembersAreSubtypeOfTargetMembers(source, target, ast, context, comparisonInfo, isComparingInstantiatedSignatures?);
		private sourcePropertyIsSubtypeOfTargetProperty(source, target, sourceProp, targetProp, ast, context, comparisonInfo, isComparingInstantiatedSignatures?);
		private sourceCallSignaturesAreSubtypeOfTargetCallSignatures(source, target, ast, context, comparisonInfo, isComparingInstantiatedSignatures?);
		private sourceConstructSignaturesAreSubtypeOfTargetConstructSignatures(source, target, ast, context, comparisonInfo, isComparingInstantiatedSignatures?);
		private sourceIndexSignaturesAreSubtypeOfTargetIndexSignatures(source, target, ast, context, comparisonInfo, isComparingInstantiatedSignatures?);
		private typeIsSubtypeOfFunction(source, ast, context);
		private signatureIsSubtypeOfTarget(s1, s2, ast, context, comparisonInfo?, isComparingInstantiatedSignatures?);
		private sourceIsAssignableToTarget(source, target, ast, context, comparisonInfo?, isComparingInstantiatedSignatures?);
		private signatureIsAssignableToTarget(s1, s2, ast, context, comparisonInfo, isComparingInstantiatedSignatures?);
		private getSymbolForRelationshipCheck(symbol);
		private sourceIsRelatableToTargetInEnclosingTypes(source, target, sourceEnclosingType, targetEnclosingType, assignableTo, comparisonCache, ast, context, comparisonInfo, isComparingInstantiatedSignatures);
		private sourceIsRelatableToTarget(source, target, assignableTo, comparisonCache, ast, context, comparisonInfo, isComparingInstantiatedSignatures);
		private sourceMembersAreRelatableToTargetMembers(source, target, assignableTo, comparisonCache, ast, context, comparisonInfo, isComparingInstantiatedSignatures);
		private infinitelyExpandingSourceTypeIsRelatableToTargetType(sourceType, targetType, assignableTo, comparisonCache, ast, context, comparisonInfo, isComparingInstantiatedSignatures);
		private infinitelyExpandingTypesAreIdentical(sourceType, targetType);
		private sourcePropertyIsRelatableToTargetProperty(source, target, sourceProp, targetProp, assignableTo, comparisonCache, ast, context, comparisonInfo, isComparingInstantiatedSignatures);
		private sourceCallSignaturesAreRelatableToTargetCallSignatures(source, target, assignableTo, comparisonCache, ast, context, comparisonInfo, isComparingInstantiatedSignatures);
		private sourceConstructSignaturesAreRelatableToTargetConstructSignatures(source, target, assignableTo, comparisonCache, ast, context, comparisonInfo, isComparingInstantiatedSignatures);
		private sourceIndexSignaturesAreRelatableToTargetIndexSignatures(source, target, assignableTo, comparisonCache, ast, context, comparisonInfo, isComparingInstantiatedSignatures);
		private signatureGroupIsRelatableToTarget(sourceSG, targetSG, assignableTo, comparisonCache, ast, context, comparisonInfo, isComparingInstantiatedSignatures);
		private signatureIsRelatableToTarget(sourceSig, targetSig, assignableTo, comparisonCache, ast, context, comparisonInfo, isComparingInstantiatedSignatures);
		private resolveOverloads(application, group, haveTypeArgumentsAtCallSite, context, diagnostics);
		private getCallTargetErrorSpanAST(callEx);
		private overloadHasCorrectArity(signature, args);
		private overloadIsApplicable(signature, args, context, comparisonInfo);
		private overloadIsApplicableForArgument(paramType, arg, argIndex, context, comparisonInfo);
		private overloadIsApplicableForAnyFunctionExpressionArgument(paramType, arg, typeParameters, parameters, returnTypeAnnotation, block, bodyExpression, argIndex, context, comparisonInfo);
		private overloadIsApplicableForObjectLiteralArgument(paramType, arg, argIndex, context, comparisonInfo);
		private overloadIsApplicableForArrayLiteralArgument(paramType, arg, argIndex, context, comparisonInfo);
		private overloadIsApplicableForOtherArgument(paramType, arg, argIndex, context, comparisonInfo);
		private overloadIsApplicableForArgumentHelper(paramType, argSym, argumentIndex, comparisonInfo, arg, context);
		private inferArgumentTypesForSignature(signature, argContext, comparisonInfo, context);
		private typeParametersAreInScopeAtArgumentList(typeParameters, args);
		private relateTypeToTypeParametersInEnclosingType(expressionType, parameterType, expressionTypeEnclosingType, parameterTypeEnclosingType, shouldFix, argContext, context);
		private relateTypeToTypeParameters(expressionType, parameterType, shouldFix, argContext, context);
		private relateTypeArgumentsOfTypeToTypeParameters(expressionType, parameterType, shouldFix, argContext, context);
		private relateInifinitelyExpandingTypeToTypeParameters(expressionType, parameterType, shouldFix, argContext, context);
		private relateFunctionSignatureToTypeParameters(expressionSignature, parameterSignature, argContext, context);
		private relateObjectTypeToTypeParameters(objectType, parameterType, shouldFix, argContext, context);
		private relateArrayTypeToTypeParameters(argArrayType, parameterArrayType, shouldFix, argContext, context);
		public instantiateTypeToAny(typeToSpecialize: PullTypeSymbol, context: PullTypeResolutionContext): PullTypeSymbol;
		static globalTypeCheckPhase: number;
		static typeCheck(compilationSettings: ImmutableCompilationSettings, semanticInfoChain: SemanticInfoChain, document: Document): void;
		private validateVariableDeclarationGroups(enclosingDecl, context);
		private typeCheckFunctionOverloads(funcDecl, context, signature?, allSignatures?);
		private checkSymbolPrivacy(declSymbol, symbol, privacyErrorReporter);
		private checkTypePrivacyOfSignatures(declSymbol, signatures, privacyErrorReporter);
		private typeParameterOfTypeDeclarationPrivacyErrorReporter(classOrInterface, indexOfTypeParameter, typeParameter, symbol, context);
		private baseListPrivacyErrorReporter(classOrInterface, declSymbol, baseAst, isExtendedType, symbol, context);
		private variablePrivacyErrorReporter(declAST, declSymbol, symbol, context);
		private checkFunctionTypePrivacy(funcDeclAST, isStatic, typeParameters, parameters, returnTypeAnnotation, block, context);
		private functionTypeArgumentArgumentTypePrivacyErrorReporter(declAST, isStatic, typeParameterAST, typeParameter, symbol, context);
		private functionArgumentTypePrivacyErrorReporter(declAST, isStatic, parameters, argIndex, paramSymbol, symbol, context);
		private functionReturnTypePrivacyErrorReporter(declAST, isStatic, returnTypeAnnotation, block, funcReturnType, symbol, context);
		private enclosingClassIsDerived(classDecl);
		private isSuperInvocationExpression(ast);
		private isSuperInvocationExpressionStatement(node);
		private getFirstStatementOfBlockOrNull(block);
		private superCallMustBeFirstStatementInConstructor(constructorDecl);
		private checkForThisCaptureInArrowFunction(expression);
		private typeCheckMembersAgainstIndexer(containerType, containerTypeDecl, context);
		private determineRelevantIndexerForMember(member, numberIndexSignature, stringIndexSignature);
		private reportErrorThatMemberIsNotSubtypeOfIndexer(member, indexSignature, astForError, context, comparisonInfo);
		private typeCheckIfTypeMemberPropertyOkToOverride(typeSymbol, extendedType, typeMember, extendedTypeMember, enclosingDecl, comparisonInfo);
		private typeCheckIfTypeExtendsType(classOrInterface, name, typeSymbol, extendedType, enclosingDecl, context);
		private typeCheckIfClassImplementsType(classDecl, classSymbol, implementedType, enclosingDecl, context);
		private hasClassTypeSymbolConflictAsValue(valueDeclAST, typeSymbol, enclosingDecl, context);
		private typeCheckBase(classOrInterface, name, typeSymbol, baseDeclAST, isExtendedType, enclosingDecl, context);
		private typeCheckBases(classOrInterface, name, heritageClauses, typeSymbol, enclosingDecl, context);
		private checkTypeCompatibilityBetweenBases(name, typeSymbol, context);
		private checkNamedPropertyTypeIdentityBetweenBases(interfaceName, interfaceSymbol, baseTypeSymbol, inheritedMembersMap, context);
		private checkIndexSignatureIdentityBetweenBases(interfaceName, interfaceSymbol, baseTypeSymbol, allInheritedSignatures, derivedTypeHasOwnNumberSignature, derivedTypeHasOwnStringSignature, context);
		private checkInheritedMembersAgainstInheritedIndexSignatures(interfaceName, interfaceSymbol, inheritedIndexSignatures, inheritedMembers, context);
		private checkThatInheritedNumberSignatureIsSubtypeOfInheritedStringSignature(interfaceName, interfaceSymbol, inheritedIndexSignatures, context);
		private checkAssignability(ast, source, target, context);
		private isReference(ast, astSymbol);
		private checkForSuperMemberAccess(expression, name, resolvedName, context);
		private getEnclosingDeclForAST(ast);
		private getEnclosingSymbolForAST(ast);
		private checkForPrivateMemberAccess(name, expressionType, resolvedName, context);
		public instantiateType(type: PullTypeSymbol, typeParameterArgumentMap: PullTypeSymbol[], instantiateFunctionTypeParameters?: boolean): PullTypeSymbol;
		public instantiateSignature(signature: PullSignatureSymbol, typeParameterArgumentMap: PullTypeSymbol[], instantiateFunctionTypeParameters?: boolean): PullSignatureSymbol;
	}
	class TypeComparisonInfo {
		public onlyCaptureFirstError: boolean;
		public flags: TypeRelationshipFlags;
		public message: string;
		public stringConstantVal: AST;
		private indent;
		constructor(sourceComparisonInfo?: TypeComparisonInfo);
		private indentString();
		public addMessage(message: string): void;
	}
	function getPropertyAssignmentNameTextFromIdentifier(identifier: AST): {
		actualText: string;
		memberName: string;
	};
	function isTypesOnlyLocation(ast: AST): boolean;
	var declCacheHit: number;
	var declCacheMiss: number;
	var symbolCacheHit: number;
	var symbolCacheMiss: number;
	class SemanticInfoChain {
		private compiler;
		private logger;
		private documents;
		private fileNameToDocument;
		public anyTypeDecl: PullDecl;
		public booleanTypeDecl: PullDecl;
		public numberTypeDecl: PullDecl;
		public stringTypeDecl: PullDecl;
		public nullTypeDecl: PullDecl;
		public undefinedTypeDecl: PullDecl;
		public voidTypeDecl: PullDecl;
		public undefinedValueDecl: PullDecl;
		public anyTypeSymbol: PullPrimitiveTypeSymbol;
		public booleanTypeSymbol: PullPrimitiveTypeSymbol;
		public numberTypeSymbol: PullPrimitiveTypeSymbol;
		public stringTypeSymbol: PullPrimitiveTypeSymbol;
		public nullTypeSymbol: PullPrimitiveTypeSymbol;
		public undefinedTypeSymbol: PullPrimitiveTypeSymbol;
		public voidTypeSymbol: PullPrimitiveTypeSymbol;
		public undefinedValueSymbol: PullSymbol;
		public emptyTypeSymbol: PullTypeSymbol;
		private astSymbolMap;
		private astAliasSymbolMap;
		private astCallResolutionDataMap;
		private declSymbolMap;
		private declSignatureSymbolMap;
		private declCache;
		private symbolCache;
		private fileNameToDiagnostics;
		private _binder;
		private _resolver;
		private _topLevelDecls;
		private _fileNames;
		constructor(compiler: TypeScriptCompiler, logger: ILogger);
		public getDocument(fileName: string): Document;
		public lineMap(fileName: string): LineMap;
		public fileNames(): string[];
		private bindPrimitiveSymbol(decl, newSymbol);
		private addPrimitiveTypeSymbol(decl);
		private addPrimitiveValueSymbol(decl, type);
		private resetGlobalSymbols();
		public addDocument(document: Document): void;
		public removeDocument(fileName: string): void;
		private getDeclPathCacheID(declPath, declKind);
		public findTopLevelSymbol(name: string, kind: PullElementKind, doNotGoPastThisDecl: PullDecl): PullSymbol;
		private findTopLevelSymbolInDecl(topLevelDecl, name, kind, doNotGoPastThisDecl);
		public findExternalModule(id: string): PullContainerSymbol;
		public findAmbientExternalModuleInGlobalContext(id: string): PullContainerSymbol;
		public findDecls(declPath: string[], declKind: PullElementKind): PullDecl[];
		public findDeclsFromPath(declPath: PullDecl[], declKind: PullElementKind): PullDecl[];
		public findSymbol(declPath: string[], declType: PullElementKind): PullSymbol;
		public cacheGlobalSymbol(symbol: PullSymbol, kind: PullElementKind): void;
		public invalidate(oldSettings?: ImmutableCompilationSettings, newSettings?: ImmutableCompilationSettings): void;
		private settingsChangeAffectsSyntax(before, after);
		public setSymbolForAST(ast: AST, symbol: PullSymbol): void;
		public getSymbolForAST(ast: AST): PullSymbol;
		public setAliasSymbolForAST(ast: AST, symbol: PullTypeAliasSymbol): void;
		public getAliasSymbolForAST(ast: AST): PullTypeAliasSymbol;
		public getCallResolutionDataForAST(ast: AST): PullAdditionalCallResolutionData;
		public setCallResolutionDataForAST(ast: AST, callResolutionData: PullAdditionalCallResolutionData): void;
		public setSymbolForDecl(decl: PullDecl, symbol: PullSymbol): void;
		public getSymbolForDecl(decl: PullDecl): PullSymbol;
		public setSignatureSymbolForDecl(decl: PullDecl, signatureSymbol: PullSignatureSymbol): void;
		public getSignatureSymbolForDecl(decl: PullDecl): PullSignatureSymbol;
		public addDiagnostic(diagnostic: Diagnostic): void;
		public getDiagnostics(fileName: string): Diagnostic[];
		public getBinder(): PullSymbolBinder;
		public getResolver(): PullTypeResolver;
		public addSyntheticIndexSignature(containingDecl: PullDecl, containingSymbol: PullTypeSymbol, ast: AST, indexParamName: string, indexParamType: PullTypeSymbol, returnType: PullTypeSymbol): void;
		public getDeclForAST(ast: AST): PullDecl;
		public getEnclosingDecl(ast: AST): PullDecl;
		public setDeclForAST(ast: AST, decl: PullDecl): void;
		public getASTForDecl(decl: PullDecl): AST;
		public setASTForDecl(decl: PullDecl, ast: AST): void;
		public topLevelDecl(fileName: string): PullDecl;
		public topLevelDecls(): PullDecl[];
		public addDiagnosticFromAST(ast: AST, diagnosticKey: string, arguments?: any[]): void;
		public diagnosticFromAST(ast: AST, diagnosticKey: string, arguments?: any[]): Diagnostic;
	}
	function getModuleNames(name: AST, result?: Identifier[]): Identifier[];
	module DeclarationCreator {
		function create(document: Document, semanticInfoChain: SemanticInfoChain, compilationSettings: ImmutableCompilationSettings): PullDecl;
	}
	class PullSymbolBinder {
		private semanticInfoChain;
		private declsBeingBound;
		constructor(semanticInfoChain: SemanticInfoChain);
		private getParent(decl, returnInstanceType?);
		private findDeclsInContext(startingDecl, declKind, searchGlobally);
		private getExistingSymbol(decl, searchKind, parent);
		private checkThatExportsMatch(decl, prevSymbol, reportError?);
		private bindEnumDeclarationToPullSymbol(enumContainerDecl);
		private bindEnumIndexerDeclsToPullSymbols(enumContainerDecl, enumContainerSymbol);
		private bindModuleDeclarationToPullSymbol(moduleContainerDecl);
		private bindImportDeclaration(importDeclaration);
		private bindClassDeclarationToPullSymbol(classDecl);
		private bindInterfaceDeclarationToPullSymbol(interfaceDecl);
		private bindObjectTypeDeclarationToPullSymbol(objectDecl);
		private bindConstructorTypeDeclarationToPullSymbol(constructorTypeDeclaration);
		private bindVariableDeclarationToPullSymbol(variableDeclaration);
		private bindCatchVariableToPullSymbol(variableDeclaration);
		private bindEnumMemberDeclarationToPullSymbol(propertyDeclaration);
		private bindPropertyDeclarationToPullSymbol(propertyDeclaration);
		private bindParameterSymbols(functionDeclaration, parameterList, funcType, signatureSymbol);
		private bindFunctionDeclarationToPullSymbol(functionDeclaration);
		private bindFunctionExpressionToPullSymbol(functionExpressionDeclaration);
		private bindFunctionTypeDeclarationToPullSymbol(functionTypeDeclaration);
		private bindMethodDeclarationToPullSymbol(methodDeclaration);
		private bindStaticPrototypePropertyOfClass(classTypeSymbol, constructorTypeSymbol);
		private bindConstructorDeclarationToPullSymbol(constructorDeclaration);
		private bindConstructSignatureDeclarationToPullSymbol(constructSignatureDeclaration);
		private bindCallSignatureDeclarationToPullSymbol(callSignatureDeclaration);
		private bindIndexSignatureDeclarationToPullSymbol(indexSignatureDeclaration);
		private bindGetAccessorDeclarationToPullSymbol(getAccessorDeclaration);
		private bindSetAccessorDeclarationToPullSymbol(setAccessorDeclaration);
		public bindDeclToPullSymbol(decl: PullDecl): void;
	}
	module PullHelpers {
		interface SignatureInfoForFuncDecl {
			signature: PullSignatureSymbol;
			allSignatures: PullSignatureSymbol[];
		}
		function getSignatureForFuncDecl(functionDecl: PullDecl): {
			signature: PullSignatureSymbol;
			allSignatures: PullSignatureSymbol[];
		};
		function getAccessorSymbol(getterOrSetter: AST, semanticInfoChain: SemanticInfoChain): PullAccessorSymbol;
		function getGetterAndSetterFunction(funcDecl: AST, semanticInfoChain: SemanticInfoChain): {
			getter: GetAccessor;
			setter: SetAccessor;
		};
		function symbolIsEnum(source: PullSymbol): boolean;
		function symbolIsModule(symbol: PullSymbol): boolean;
		function isNameNumeric(name: string): boolean;
		function typeSymbolsAreIdentical(a: PullTypeSymbol, b: PullTypeSymbol): boolean;
		function getRootType(type: PullTypeSymbol): PullTypeSymbol;
		function isSymbolLocal(symbol: PullSymbol): boolean;
	}
	enum GenerativeTypeClassification {
		Unknown = 0,
		Open = 1,
		Closed = 2,
		InfinitelyExpanding = 3,
	}
	class PullTypeReferenceSymbol extends PullTypeSymbol {
		public referencedTypeSymbol: PullTypeSymbol;
		static createTypeReference(type: PullTypeSymbol): PullTypeReferenceSymbol;
		constructor(referencedTypeSymbol: PullTypeSymbol);
		public isTypeReference(): boolean;
		public isResolved: boolean;
		public setResolved(): void;
		public setUnresolved(): void;
		public invalidate(): void;
		public ensureReferencedTypeIsResolved(): void;
		public getReferencedTypeSymbol(): PullTypeSymbol;
		public _getResolver(): PullTypeResolver;
		public hasMembers(): boolean;
		public setAssociatedContainerType(type: PullTypeSymbol): void;
		public getAssociatedContainerType(): PullTypeSymbol;
		public getFunctionSymbol(): PullSymbol;
		public setFunctionSymbol(symbol: PullSymbol): void;
		public addContainedNonMember(nonMember: PullSymbol): void;
		public findContainedNonMemberContainer(containerName: string, kind?: PullElementKind): PullTypeSymbol;
		public addMember(memberSymbol: PullSymbol): void;
		public addEnclosedMemberType(enclosedType: PullTypeSymbol): void;
		public addEnclosedMemberContainer(enclosedContainer: PullTypeSymbol): void;
		public addEnclosedNonMember(enclosedNonMember: PullSymbol): void;
		public addEnclosedNonMemberType(enclosedNonMemberType: PullTypeSymbol): void;
		public addEnclosedNonMemberContainer(enclosedNonMemberContainer: PullTypeSymbol): void;
		public addTypeParameter(typeParameter: PullTypeParameterSymbol): void;
		public addConstructorTypeParameter(typeParameter: PullTypeParameterSymbol): void;
		public findContainedNonMember(name: string): PullSymbol;
		public findContainedNonMemberType(typeName: string, kind?: PullElementKind): PullTypeSymbol;
		public getMembers(): PullSymbol[];
		public setHasDefaultConstructor(hasOne?: boolean): void;
		public getHasDefaultConstructor(): boolean;
		public getConstructorMethod(): PullSymbol;
		public setConstructorMethod(constructorMethod: PullSymbol): void;
		public getTypeParameters(): PullTypeParameterSymbol[];
		public isGeneric(): boolean;
		public addSpecialization(specializedVersionOfThisType: PullTypeSymbol, substitutingTypes: PullTypeSymbol[]): void;
		public getSpecialization(substitutingTypes: PullTypeSymbol[]): PullTypeSymbol;
		public getKnownSpecializations(): PullTypeSymbol[];
		public getTypeArguments(): PullTypeSymbol[];
		public getTypeArgumentsOrTypeParameters(): PullTypeSymbol[];
		public addCallSignature(callSignature: PullSignatureSymbol): void;
		public addConstructSignature(constructSignature: PullSignatureSymbol): void;
		public addIndexSignature(indexSignature: PullSignatureSymbol): void;
		public hasOwnCallSignatures(): boolean;
		public getCallSignatures(): PullSignatureSymbol[];
		public hasOwnConstructSignatures(): boolean;
		public getConstructSignatures(): PullSignatureSymbol[];
		public hasOwnIndexSignatures(): boolean;
		public getIndexSignatures(): PullSignatureSymbol[];
		public addImplementedType(implementedType: PullTypeSymbol): void;
		public getImplementedTypes(): PullTypeSymbol[];
		public addExtendedType(extendedType: PullTypeSymbol): void;
		public getExtendedTypes(): PullTypeSymbol[];
		public addTypeThatExtendsThisType(type: PullTypeSymbol): void;
		public getTypesThatExtendThisType(): PullTypeSymbol[];
		public addTypeThatExplicitlyImplementsThisType(type: PullTypeSymbol): void;
		public getTypesThatExplicitlyImplementThisType(): PullTypeSymbol[];
		public hasBase(potentialBase: PullTypeSymbol, visited?: PullSymbol[]): boolean;
		public isValidBaseKind(baseType: PullTypeSymbol, isExtendedType: boolean): boolean;
		public findMember(name: string, lookInParent?: boolean): PullSymbol;
		public findNestedType(name: string, kind?: PullElementKind): PullTypeSymbol;
		public findNestedContainer(name: string, kind?: PullElementKind): PullTypeSymbol;
		public getAllMembers(searchDeclKind: PullElementKind, memberVisiblity: GetAllMembersVisiblity): PullSymbol[];
		public findTypeParameter(name: string): PullTypeParameterSymbol;
		public hasOnlyOverloadCallSignatures(): boolean;
	}
	var nSpecializationsCreated: number;
	var nSpecializedSignaturesCreated: number;
	class PullInstantiatedTypeReferenceSymbol extends PullTypeReferenceSymbol {
		public referencedTypeSymbol: PullTypeSymbol;
		private _typeParameterArgumentMap;
		private _instantiatedMembers;
		private _allInstantiatedMemberNameCache;
		private _instantiatedMemberNameCache;
		private _instantiatedCallSignatures;
		private _instantiatedConstructSignatures;
		private _instantiatedIndexSignatures;
		private _typeArgumentReferences;
		private _instantiatedConstructorMethod;
		private _instantiatedAssociatedContainerType;
		private _isArray;
		public isInstanceReferenceType: boolean;
		public getIsSpecialized(): boolean;
		private _generativeTypeClassification;
		public getGenerativeTypeClassification(enclosingType: PullTypeSymbol): GenerativeTypeClassification;
		public isArrayNamedTypeReference(): boolean;
		public getElementType(): PullTypeSymbol;
		public getReferencedTypeSymbol(): PullTypeSymbol;
		static create(resolver: PullTypeResolver, type: PullTypeSymbol, typeParameterArgumentMap: PullTypeSymbol[], instantiateFunctionTypeParameters?: boolean): PullInstantiatedTypeReferenceSymbol;
		constructor(referencedTypeSymbol: PullTypeSymbol, _typeParameterArgumentMap: PullTypeSymbol[]);
		public isGeneric(): boolean;
		public getTypeParameterArgumentMap(): PullTypeSymbol[];
		public getTypeArguments(): PullTypeSymbol[];
		public getTypeArgumentsOrTypeParameters(): PullTypeSymbol[];
		public getMembers(): PullSymbol[];
		public findMember(name: string, lookInParent?: boolean): PullSymbol;
		public getAllMembers(searchDeclKind: PullElementKind, memberVisiblity: GetAllMembersVisiblity): PullSymbol[];
		public getConstructorMethod(): PullSymbol;
		public getAssociatedContainerType(): PullTypeSymbol;
		public getCallSignatures(): PullSignatureSymbol[];
		public getConstructSignatures(): PullSignatureSymbol[];
		public getIndexSignatures(): PullSignatureSymbol[];
		public hasBase(potentialBase: PullTypeSymbol, visited?: PullSymbol[]): boolean;
	}
	class SyntaxTreeToAstVisitor implements ISyntaxVisitor {
		private fileName;
		public lineMap: LineMap;
		private compilationSettings;
		public position: number;
		public previousTokenTrailingComments: Comment[];
		constructor(fileName: string, lineMap: LineMap, compilationSettings: ImmutableCompilationSettings);
		static visit(syntaxTree: SyntaxTree, fileName: string, compilationSettings: ImmutableCompilationSettings, incrementalAST: boolean): SourceUnit;
		public movePast(element: ISyntaxElement): void;
		private moveTo(element1, element2);
		private setCommentsAndSpan(ast, fullStart, node);
		public createTokenSpan(fullStart: number, element: ISyntaxToken): ASTSpan;
		public setSpan(span: AST, fullStart: number, element: ISyntaxElement, firstToken?: ISyntaxToken, lastToken?: ISyntaxToken): void;
		public setSpanExplicit(span: IASTSpan, start: number, end: number): void;
		public visitSyntaxList(node: ISyntaxList): ISyntaxList2;
		public visitSeparatedSyntaxList(list: ISeparatedSyntaxList): ISeparatedSyntaxList2;
		private convertComment(trivia, commentStartPosition, hasTrailingNewLine);
		private convertComments(triviaList, commentStartPosition);
		private mergeComments(comments1, comments2);
		private convertTokenLeadingComments(token, commentStartPosition);
		private convertTokenTrailingComments(token, commentStartPosition);
		private convertNodeTrailingComments(node, lastToken, nodeStart);
		private visitIdentifier(token);
		public visitToken(token: ISyntaxToken): IASTToken;
		public visitTokenWorker(token: ISyntaxToken): IASTToken;
		public visitSourceUnit(node: SourceUnitSyntax): SourceUnit;
		public visitExternalModuleReference(node: ExternalModuleReferenceSyntax): ExternalModuleReference;
		public visitModuleNameModuleReference(node: ModuleNameModuleReferenceSyntax): ModuleNameModuleReference;
		public visitClassDeclaration(node: ClassDeclarationSyntax): ClassDeclaration;
		private visitModifiers(modifiers);
		public visitInterfaceDeclaration(node: InterfaceDeclarationSyntax): InterfaceDeclaration;
		public visitHeritageClause(node: HeritageClauseSyntax): HeritageClause;
		public visitModuleDeclaration(node: ModuleDeclarationSyntax): ModuleDeclaration;
		public visitFunctionDeclaration(node: FunctionDeclarationSyntax): FunctionDeclaration;
		public visitEnumDeclaration(node: EnumDeclarationSyntax): EnumDeclaration;
		public visitEnumElement(node: EnumElementSyntax): EnumElement;
		public visitImportDeclaration(node: ImportDeclarationSyntax): ImportDeclaration;
		public visitExportAssignment(node: ExportAssignmentSyntax): ExportAssignment;
		public visitVariableStatement(node: VariableStatementSyntax): VariableStatement;
		public visitVariableDeclaration(node: VariableDeclarationSyntax): VariableDeclaration;
		public visitVariableDeclarator(node: VariableDeclaratorSyntax): VariableDeclarator;
		public visitEqualsValueClause(node: EqualsValueClauseSyntax): EqualsValueClause;
		public visitPrefixUnaryExpression(node: PrefixUnaryExpressionSyntax): PrefixUnaryExpression;
		public visitArrayLiteralExpression(node: ArrayLiteralExpressionSyntax): ArrayLiteralExpression;
		public visitOmittedExpression(node: OmittedExpressionSyntax): OmittedExpression;
		public visitParenthesizedExpression(node: ParenthesizedExpressionSyntax): ParenthesizedExpression;
		public visitSimpleArrowFunctionExpression(node: SimpleArrowFunctionExpressionSyntax): SimpleArrowFunctionExpression;
		public visitParenthesizedArrowFunctionExpression(node: ParenthesizedArrowFunctionExpressionSyntax): ParenthesizedArrowFunctionExpression;
		public visitType(type: ITypeSyntax): AST;
		public visitTypeQuery(node: TypeQuerySyntax): TypeQuery;
		public visitQualifiedName(node: QualifiedNameSyntax): QualifiedName;
		public visitTypeArgumentList(node: TypeArgumentListSyntax): TypeArgumentList;
		public visitConstructorType(node: ConstructorTypeSyntax): ConstructorType;
		public visitFunctionType(node: FunctionTypeSyntax): FunctionType;
		public visitObjectType(node: ObjectTypeSyntax): ObjectType;
		public visitArrayType(node: ArrayTypeSyntax): ArrayType;
		public visitGenericType(node: GenericTypeSyntax): GenericType;
		public visitTypeAnnotation(node: TypeAnnotationSyntax): TypeAnnotation;
		public visitBlock(node: BlockSyntax): Block;
		public visitParameter(node: ParameterSyntax): Parameter;
		public visitMemberAccessExpression(node: MemberAccessExpressionSyntax): MemberAccessExpression;
		public visitPostfixUnaryExpression(node: PostfixUnaryExpressionSyntax): PostfixUnaryExpression;
		public visitElementAccessExpression(node: ElementAccessExpressionSyntax): ElementAccessExpression;
		public visitInvocationExpression(node: InvocationExpressionSyntax): InvocationExpression;
		public visitArgumentList(node: ArgumentListSyntax): ArgumentList;
		public visitBinaryExpression(node: BinaryExpressionSyntax): BinaryExpression;
		public visitConditionalExpression(node: ConditionalExpressionSyntax): ConditionalExpression;
		public visitConstructSignature(node: ConstructSignatureSyntax): ConstructSignature;
		public visitMethodSignature(node: MethodSignatureSyntax): MethodSignature;
		public visitIndexSignature(node: IndexSignatureSyntax): IndexSignature;
		public visitPropertySignature(node: PropertySignatureSyntax): PropertySignature;
		public visitParameterList(node: ParameterListSyntax): ParameterList;
		public visitCallSignature(node: CallSignatureSyntax): CallSignature;
		public visitTypeParameterList(node: TypeParameterListSyntax): TypeParameterList;
		public visitTypeParameter(node: TypeParameterSyntax): TypeParameter;
		public visitConstraint(node: ConstraintSyntax): Constraint;
		public visitIfStatement(node: IfStatementSyntax): IfStatement;
		public visitElseClause(node: ElseClauseSyntax): ElseClause;
		public visitExpressionStatement(node: ExpressionStatementSyntax): ExpressionStatement;
		public visitConstructorDeclaration(node: ConstructorDeclarationSyntax): ConstructorDeclaration;
		public visitIndexMemberDeclaration(node: IndexMemberDeclarationSyntax): IndexMemberDeclaration;
		public visitMemberFunctionDeclaration(node: MemberFunctionDeclarationSyntax): MemberFunctionDeclaration;
		public visitGetAccessor(node: GetAccessorSyntax): GetAccessor;
		public visitSetAccessor(node: SetAccessorSyntax): SetAccessor;
		public visitMemberVariableDeclaration(node: MemberVariableDeclarationSyntax): MemberVariableDeclaration;
		public visitThrowStatement(node: ThrowStatementSyntax): ThrowStatement;
		public visitReturnStatement(node: ReturnStatementSyntax): ReturnStatement;
		public visitObjectCreationExpression(node: ObjectCreationExpressionSyntax): ObjectCreationExpression;
		public visitSwitchStatement(node: SwitchStatementSyntax): SwitchStatement;
		public visitCaseSwitchClause(node: CaseSwitchClauseSyntax): CaseSwitchClause;
		public visitDefaultSwitchClause(node: DefaultSwitchClauseSyntax): DefaultSwitchClause;
		public visitBreakStatement(node: BreakStatementSyntax): BreakStatement;
		public visitContinueStatement(node: ContinueStatementSyntax): ContinueStatement;
		public visitForStatement(node: ForStatementSyntax): ForStatement;
		public visitForInStatement(node: ForInStatementSyntax): ForInStatement;
		public visitWhileStatement(node: WhileStatementSyntax): WhileStatement;
		public visitWithStatement(node: WithStatementSyntax): WithStatement;
		public visitCastExpression(node: CastExpressionSyntax): CastExpression;
		public visitObjectLiteralExpression(node: ObjectLiteralExpressionSyntax): ObjectLiteralExpression;
		public visitSimplePropertyAssignment(node: SimplePropertyAssignmentSyntax): SimplePropertyAssignment;
		public visitFunctionPropertyAssignment(node: FunctionPropertyAssignmentSyntax): FunctionPropertyAssignment;
		public visitFunctionExpression(node: FunctionExpressionSyntax): FunctionExpression;
		public visitEmptyStatement(node: EmptyStatementSyntax): EmptyStatement;
		public visitTryStatement(node: TryStatementSyntax): TryStatement;
		public visitCatchClause(node: CatchClauseSyntax): CatchClause;
		public visitFinallyClause(node: FinallyClauseSyntax): FinallyClause;
		public visitLabeledStatement(node: LabeledStatementSyntax): LabeledStatement;
		public visitDoStatement(node: DoStatementSyntax): DoStatement;
		public visitTypeOfExpression(node: TypeOfExpressionSyntax): TypeOfExpression;
		public visitDeleteExpression(node: DeleteExpressionSyntax): DeleteExpression;
		public visitVoidExpression(node: VoidExpressionSyntax): VoidExpression;
		public visitDebuggerStatement(node: DebuggerStatementSyntax): DebuggerStatement;
	}
	var fileResolutionTime: number;
	var fileResolutionIOTime: number;
	var fileResolutionScanImportsTime: number;
	var fileResolutionImportFileSearchTime: number;
	var fileResolutionGetDefaultLibraryTime: number;
	var sourceCharactersCompiled: number;
	var syntaxTreeParseTime: number;
	var syntaxDiagnosticsTime: number;
	var astTranslationTime: number;
	var typeCheckTime: number;
	var compilerResolvePathTime: number;
	var compilerDirectoryNameTime: number;
	var compilerDirectoryExistsTime: number;
	var compilerFileExistsTime: number;
	var emitTime: number;
	var emitWriteFileTime: number;
	var declarationEmitTime: number;
	var declarationEmitIsExternallyVisibleTime: number;
	var declarationEmitTypeSignatureTime: number;
	var declarationEmitGetBoundDeclTypeTime: number;
	var declarationEmitIsOverloadedCallSignatureTime: number;
	var declarationEmitFunctionDeclarationGetSymbolTime: number;
	var declarationEmitGetBaseTypeTime: number;
	var declarationEmitGetAccessorFunctionTime: number;
	var declarationEmitGetTypeParameterSymbolTime: number;
	var declarationEmitGetImportDeclarationSymbolTime: number;
	var ioHostResolvePathTime: number;
	var ioHostDirectoryNameTime: number;
	var ioHostCreateDirectoryStructureTime: number;
	var ioHostWriteFileTime: number;
	interface PullSymbolInfo {
		symbol: PullSymbol;
		aliasSymbol: PullTypeAliasSymbol;
		ast: AST;
		enclosingScopeSymbol: PullSymbol;
	}
	interface PullCallSymbolInfo {
		targetSymbol: PullSymbol;
		resolvedSignatures: PullSignatureSymbol[];
		candidateSignature: PullSignatureSymbol;
		isConstructorCall: boolean;
		ast: AST;
		enclosingScopeSymbol: PullSymbol;
	}
	interface PullVisibleSymbolsInfo {
		symbols: PullSymbol[];
		enclosingScopeSymbol: PullSymbol;
	}
	class EmitOutput {
		public outputFiles: OutputFile[];
		public diagnostics: Diagnostic[];
	}
	enum OutputFileType {
		JavaScript = 0,
		SourceMap = 1,
		Declaration = 2,
	}
	class OutputFile {
		public name: string;
		public writeByteOrderMark: boolean;
		public text: string;
		public fileType: OutputFileType;
		public sourceMapEntries: SourceMapEntry[];
		constructor(name: string, writeByteOrderMark: boolean, text: string, fileType: OutputFileType, sourceMapEntries?: SourceMapEntry[]);
	}
	class CompileResult {
		public diagnostics: Diagnostic[];
		public outputFiles: OutputFile[];
		static fromDiagnostics(diagnostics: Diagnostic[]): CompileResult;
		static fromOutputFiles(outputFiles: OutputFile[]): CompileResult;
	}
	class TypeScriptCompiler {
		public logger: ILogger;
		private _settings;
		private semanticInfoChain;
		constructor(logger?: ILogger, _settings?: ImmutableCompilationSettings);
		public compilationSettings(): ImmutableCompilationSettings;
		public setCompilationSettings(newSettings: ImmutableCompilationSettings): void;
		public getDocument(fileName: string): Document;
		public cleanupSemanticCache(): void;
		public addFile(fileName: string, scriptSnapshot: IScriptSnapshot, byteOrderMark: ByteOrderMark, version: number, isOpen: boolean, referencedFiles?: string[]): void;
		public updateFile(fileName: string, scriptSnapshot: IScriptSnapshot, version: number, isOpen: boolean, textChangeRange: TextChangeRange): void;
		public removeFile(fileName: string): void;
		public _isDynamicModuleCompilation(): boolean;
		public mapOutputFileName(document: Document, emitOptions: EmitOptions, extensionChanger: (fname: string, wholeFileNameReplaced: boolean) => string): string;
		private writeByteOrderMarkForDocument(document);
		static mapToDTSFileName(fileName: string, wholeFileNameReplaced: boolean): string;
		public _shouldEmit(document: Document): boolean;
		public _shouldEmitDeclarations(document: Document): boolean;
		private emitDocumentDeclarationsWorker(document, emitOptions, declarationEmitter?);
		public _emitDocumentDeclarations(document: Document, emitOptions: EmitOptions, onSingleFileEmitComplete: (files: OutputFile) => void, sharedEmitter: DeclarationEmitter): DeclarationEmitter;
		public emitAllDeclarations(resolvePath: (path: string) => string): EmitOutput;
		public emitDeclarations(fileName: string, resolvePath: (path: string) => string): EmitOutput;
		static mapToFileNameExtension(extension: string, fileName: string, wholeFileNameReplaced: boolean): string;
		static mapToJSFileName(fileName: string, wholeFileNameReplaced: boolean): string;
		private emitDocumentWorker(document, emitOptions, emitter?);
		public _emitDocument(document: Document, emitOptions: EmitOptions, onSingleFileEmitComplete: (files: OutputFile[]) => void, sharedEmitter: Emitter): Emitter;
		public emitAll(resolvePath: (path: string) => string): EmitOutput;
		public emit(fileName: string, resolvePath: (path: string) => string): EmitOutput;
		public compile(resolvePath: (path: string) => string, continueOnDiagnostics?: boolean): Iterator<CompileResult>;
		public getSyntacticDiagnostics(fileName: string): Diagnostic[];
		/** Used for diagnostics in tests */
		private getSyntaxTree(fileName);
		private getSourceUnit(fileName);
		public getSemanticDiagnostics(fileName: string): Diagnostic[];
		public resolveAllFiles(): void;
		public getSymbolOfDeclaration(decl: PullDecl): PullSymbol;
		private extractResolutionContextFromAST(resolver, ast, document, propagateContextualTypes);
		private extractResolutionContextForVariable(inContextuallyTypedAssignment, propagateContextualTypes, resolver, resolutionContext, enclosingDecl, assigningAST, init);
		private getASTPath(ast);
		public pullGetSymbolInformationFromAST(ast: AST, document: Document): PullSymbolInfo;
		public pullGetCallInformationFromAST(ast: AST, document: Document): PullCallSymbolInfo;
		public pullGetVisibleMemberSymbolsFromAST(ast: AST, document: Document): PullVisibleSymbolsInfo;
		public pullGetVisibleDeclsFromAST(ast: AST, document: Document): PullDecl[];
		public pullGetContextualMembersFromAST(ast: AST, document: Document): PullVisibleSymbolsInfo;
		public pullGetDeclInformation(decl: PullDecl, ast: AST, document: Document): PullSymbolInfo;
		public topLevelDeclaration(fileName: string): PullDecl;
		public getDeclForAST(ast: AST): PullDecl;
		public fileNames(): string[];
		public topLevelDecl(fileName: string): PullDecl;
	}
	function compareDataObjects(dst: any, src: any): boolean;
	interface IFindFileResult {
		fileInformation: FileInformation;
		path: string;
	}
	interface IFileWatcher {
		close(): void;
	}
	interface IIO {
		readFile(path: string, codepage: number): FileInformation;
		writeFile(path: string, contents: string, writeByteOrderMark: boolean): void;
		deleteFile(path: string): void;
		dir(path: string, re?: RegExp, options?: {
			recursive?: boolean;
		}): string[];
		fileExists(path: string): boolean;
		directoryExists(path: string): boolean;
		createDirectory(path: string): void;
		resolvePath(path: string): string;
		dirName(path: string): string;
		findFile(rootPath: string, partialFilePath: string): IFindFileResult;
		print(str: string): void;
		printLine(str: string): void;
		arguments: string[];
		stderr: ITextWriter;
		stdout: ITextWriter;
		watchFile(fileName: string, callback: (x: string) => void): IFileWatcher;
		run(source: string, fileName: string): void;
		getExecutingFilePath(): string;
		quit(exitCode?: number): void;
	}
	module IOUtils {
		function writeFileAndFolderStructure(ioHost: IIO, fileName: string, contents: string, writeByteOrderMark: boolean): void;
		function throwIOError(message: string, error: Error): void;
		function combine(prefix: string, suffix: string): string;
		class BufferedTextWriter implements ITextWriter {
			public writer: {
				Write: (str: string) => void;
				Close: () => void;
			};
			public capacity: number;
			public buffer: string;
			constructor(writer: {
				Write: (str: string) => void;
				Close: () => void;
			}, capacity?: number);
			public Write(str: string): void;
			public WriteLine(str: string): void;
			public Close(): void;
		}
	}
	var IO: IIO;
	interface IOptions {
		name?: string;
		flag?: boolean;
		short?: string;
		usage?: {
			locCode: string;
			args: string[];
		};
		set?: (s: string) => void;
		type?: string;
		experimental?: boolean;
	}
	class OptionsParser {
		public host: IIO;
		public version: string;
		private DEFAULT_SHORT_FLAG;
		private DEFAULT_LONG_FLAG;
		private printedVersion;
		private findOption(arg);
		public unnamed: string[];
		public options: IOptions[];
		constructor(host: IIO, version: string);
		public printUsage(): void;
		public printVersion(): void;
		public option(name: string, config: IOptions, short?: string): void;
		public flag(name: string, config: IOptions, short?: string): void;
		public parseString(argString: string): void;
		public parse(args: string[]): void;
	}
	class BatchCompiler implements IReferenceResolverHost {
		private ioHost;
		public compilerVersion: string;
		private inputFiles;
		private compilationSettings;
		private resolvedFiles;
		private fileNameToSourceFile;
		private hasErrors;
		private logger;
		constructor(ioHost: IIO);
		public batchCompile(): void;
		private resolve();
		private compile();
		private parseOptions();
		private setLocale(locale);
		private setLanguageAndTerritory(language, territory);
		private watchFiles();
		private getSourceFile(fileName);
		private getDefaultLibraryFilePath();
		public getScriptSnapshot(fileName: string): IScriptSnapshot;
		public resolveRelativePath(path: string, directory: string): string;
		private fileExistsCache;
		public fileExists(path: string): boolean;
		public getParentDirectory(path: string): string;
		private addDiagnostic(diagnostic);
		private tryWriteOutputFiles(outputFiles);
		public writeFile(fileName: string, contents: string, writeByteOrderMark: boolean): void;
		public directoryExists(path: string): boolean;
		private resolvePathCache;
		public resolvePath(path: string): string;
	}
	module Collections {
		var DefaultHashTableCapacity: number;
		class HashTable<TKey, TValue> {
			private hash;
			private entries;
			private count;
			constructor(capacity: number, hash: (k: TKey) => number);
			public set(key: TKey, value: TValue): void;
			public add(key: TKey, value: TValue): void;
			public containsKey(key: TKey): boolean;
			public get(key: TKey): TValue;
			private computeHashCode(key);
			private addOrSet(key, value, throwOnExistingEntry);
			private findEntry(key, hashCode);
			private addEntry(key, value, hashCode);
			private grow();
		}
		function createHashTable<TKey, TValue>(capacity?: number, hash?: (k: TKey) => number): HashTable<TKey, TValue>;
		function identityHashCode(value: any): number;
		var DefaultStringTableCapacity: number;
		class StringTable {
			private entries;
			private count;
			constructor(capacity: number);
			public addCharArray(key: number[], start: number, len: number): string;
			private findCharArrayEntry(key, start, len, hashCode);
			private addEntry(text, hashCode);
			private grow();
			private static textCharArrayEquals(text, array, start, length);
		}
		var DefaultStringTable: StringTable;
	}
	module TextFactory {
		function createText(value: string): IText;
	}
	module SimpleText {
		function fromString(value: string): ISimpleText;
		function fromScriptSnapshot(scriptSnapshot: IScriptSnapshot): ISimpleText;
	}
	module TextUtilities {
		interface ICharacterSequence {
			charCodeAt(index: number): number;
			length: number;
		}
		function parseLineStarts(text: ICharacterSequence): number[];
		function getLengthOfLineBreakSlow(text: ICharacterSequence, index: number, c: number): number;
		function getLengthOfLineBreak(text: ICharacterSequence, index: number): number;
		function isAnyLineBreakCharacter(c: number): boolean;
	}
	module Indentation {
		function columnForEndOfToken(token: ISyntaxToken, syntaxInformationMap: SyntaxInformationMap, options: FormattingOptions): number;
		function columnForStartOfToken(token: ISyntaxToken, syntaxInformationMap: SyntaxInformationMap, options: FormattingOptions): number;
		function columnForStartOfFirstTokenInLineContainingToken(token: ISyntaxToken, syntaxInformationMap: SyntaxInformationMap, options: FormattingOptions): number;
		function columnForPositionInString(input: string, position: number, options: FormattingOptions): number;
		function indentationString(column: number, options: FormattingOptions): string;
		function indentationTrivia(column: number, options: FormattingOptions): ISyntaxTrivia;
		function firstNonWhitespacePosition(value: string): number;
	}
	module SyntaxFacts {
		function getTokenKind(text: string): SyntaxKind;
		function getText(kind: SyntaxKind): string;
		function isTokenKind(kind: SyntaxKind): boolean;
		function isAnyKeyword(kind: SyntaxKind): boolean;
		function isStandardKeyword(kind: SyntaxKind): boolean;
		function isFutureReservedKeyword(kind: SyntaxKind): boolean;
		function isFutureReservedStrictKeyword(kind: SyntaxKind): boolean;
		function isAnyPunctuation(kind: SyntaxKind): boolean;
		function isPrefixUnaryExpressionOperatorToken(tokenKind: SyntaxKind): boolean;
		function isBinaryExpressionOperatorToken(tokenKind: SyntaxKind): boolean;
		function getPrefixUnaryExpressionFromOperatorToken(tokenKind: SyntaxKind): SyntaxKind;
		function getPostfixUnaryExpressionFromOperatorToken(tokenKind: SyntaxKind): SyntaxKind;
		function getBinaryExpressionFromOperatorToken(tokenKind: SyntaxKind): SyntaxKind;
		function getOperatorTokenFromBinaryExpression(tokenKind: SyntaxKind): SyntaxKind;
		function isAnyDivideToken(kind: SyntaxKind): boolean;
		function isAnyDivideOrRegularExpressionToken(kind: SyntaxKind): boolean;
		function isDirectivePrologueElement(node: ISyntaxNodeOrToken): boolean;
		function isUseStrictDirective(node: ISyntaxNodeOrToken): boolean;
		function isIdentifierNameOrAnyKeyword(token: ISyntaxToken): boolean;
	}
	module Syntax {
		var emptySeparatedList: ISeparatedSyntaxList;
		function separatedList(nodes: ISyntaxNodeOrToken[]): ISeparatedSyntaxList;
		function emptySourceUnit(): SourceUnitSyntax;
		function getStandaloneExpression(positionedToken: PositionedToken): PositionedNodeOrToken;
		function isInModuleOrTypeContext(positionedToken: PositionedToken): boolean;
		function isInTypeOnlyContext(positionedToken: PositionedToken): boolean;
		function childOffset(parent: ISyntaxElement, child: ISyntaxElement): number;
		function childOffsetAt(parent: ISyntaxElement, index: number): number;
		function childIndex(parent: ISyntaxElement, child: ISyntaxElement): number;
		function nodeStructuralEquals(node1: SyntaxNode, node2: SyntaxNode): boolean;
		function nodeOrTokenStructuralEquals(node1: ISyntaxNodeOrToken, node2: ISyntaxNodeOrToken): boolean;
		function tokenStructuralEquals(token1: ISyntaxToken, token2: ISyntaxToken): boolean;
		function triviaListStructuralEquals(triviaList1: ISyntaxTriviaList, triviaList2: ISyntaxTriviaList): boolean;
		function triviaStructuralEquals(trivia1: ISyntaxTrivia, trivia2: ISyntaxTrivia): boolean;
		function listStructuralEquals(list1: ISyntaxList, list2: ISyntaxList): boolean;
		function separatedListStructuralEquals(list1: ISeparatedSyntaxList, list2: ISeparatedSyntaxList): boolean;
		function elementStructuralEquals(element1: ISyntaxElement, element2: ISyntaxElement): boolean;
		function identifierName(text: string, info?: ITokenInfo): ISyntaxToken;
		function trueExpression(): IUnaryExpressionSyntax;
		function falseExpression(): IUnaryExpressionSyntax;
		function numericLiteralExpression(text: string): IUnaryExpressionSyntax;
		function stringLiteralExpression(text: string): IUnaryExpressionSyntax;
		function isSuperInvocationExpression(node: IExpressionSyntax): boolean;
		function isSuperInvocationExpressionStatement(node: SyntaxNode): boolean;
		function isSuperMemberAccessExpression(node: IExpressionSyntax): boolean;
		function isSuperMemberAccessInvocationExpression(node: SyntaxNode): boolean;
		function assignmentExpression(left: IExpressionSyntax, token: ISyntaxToken, right: IExpressionSyntax): BinaryExpressionSyntax;
		function nodeHasSkippedOrMissingTokens(node: SyntaxNode): boolean;
		function isUnterminatedStringLiteral(token: ISyntaxToken): boolean;
		function isUnterminatedMultilineCommentTrivia(trivia: ISyntaxTrivia): boolean;
		function isEntirelyInsideCommentTrivia(trivia: ISyntaxTrivia, fullStart: number, position: number): boolean;
		function isEntirelyInsideComment(sourceUnit: SourceUnitSyntax, position: number): boolean;
		function isEntirelyInStringOrRegularExpressionLiteral(sourceUnit: SourceUnitSyntax, position: number): boolean;
		function findSkippedTokenInLeadingTriviaList(positionedToken: PositionedToken, position: number): PositionedSkippedToken;
		function findSkippedTokenInTrailingTriviaList(positionedToken: PositionedToken, position: number): PositionedSkippedToken;
		function findSkippedTokenInPositionedToken(positionedToken: PositionedToken, position: number): PositionedSkippedToken;
		function findSkippedTokenOnLeft(positionedToken: PositionedToken, position: number): PositionedSkippedToken;
		function getAncestorOfKind(positionedToken: PositionedElement, kind: SyntaxKind): PositionedElement;
		function hasAncestorOfKind(positionedToken: PositionedElement, kind: SyntaxKind): boolean;
		function isIntegerLiteral(expression: IExpressionSyntax): boolean;
		interface IFactory {
			sourceUnit(moduleElements: ISyntaxList, endOfFileToken: ISyntaxToken): SourceUnitSyntax;
			externalModuleReference(requireKeyword: ISyntaxToken, openParenToken: ISyntaxToken, stringLiteral: ISyntaxToken, closeParenToken: ISyntaxToken): ExternalModuleReferenceSyntax;
			moduleNameModuleReference(moduleName: INameSyntax): ModuleNameModuleReferenceSyntax;
			importDeclaration(modifiers: ISyntaxList, importKeyword: ISyntaxToken, identifier: ISyntaxToken, equalsToken: ISyntaxToken, moduleReference: IModuleReferenceSyntax, semicolonToken: ISyntaxToken): ImportDeclarationSyntax;
			exportAssignment(exportKeyword: ISyntaxToken, equalsToken: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken): ExportAssignmentSyntax;
			classDeclaration(modifiers: ISyntaxList, classKeyword: ISyntaxToken, identifier: ISyntaxToken, typeParameterList: TypeParameterListSyntax, heritageClauses: ISyntaxList, openBraceToken: ISyntaxToken, classElements: ISyntaxList, closeBraceToken: ISyntaxToken): ClassDeclarationSyntax;
			interfaceDeclaration(modifiers: ISyntaxList, interfaceKeyword: ISyntaxToken, identifier: ISyntaxToken, typeParameterList: TypeParameterListSyntax, heritageClauses: ISyntaxList, body: ObjectTypeSyntax): InterfaceDeclarationSyntax;
			heritageClause(kind: SyntaxKind, extendsOrImplementsKeyword: ISyntaxToken, typeNames: ISeparatedSyntaxList): HeritageClauseSyntax;
			moduleDeclaration(modifiers: ISyntaxList, moduleKeyword: ISyntaxToken, name: INameSyntax, stringLiteral: ISyntaxToken, openBraceToken: ISyntaxToken, moduleElements: ISyntaxList, closeBraceToken: ISyntaxToken): ModuleDeclarationSyntax;
			functionDeclaration(modifiers: ISyntaxList, functionKeyword: ISyntaxToken, identifier: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken): FunctionDeclarationSyntax;
			variableStatement(modifiers: ISyntaxList, variableDeclaration: VariableDeclarationSyntax, semicolonToken: ISyntaxToken): VariableStatementSyntax;
			variableDeclaration(varKeyword: ISyntaxToken, variableDeclarators: ISeparatedSyntaxList): VariableDeclarationSyntax;
			variableDeclarator(propertyName: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, equalsValueClause: EqualsValueClauseSyntax): VariableDeclaratorSyntax;
			equalsValueClause(equalsToken: ISyntaxToken, value: IExpressionSyntax): EqualsValueClauseSyntax;
			prefixUnaryExpression(kind: SyntaxKind, operatorToken: ISyntaxToken, operand: IUnaryExpressionSyntax): PrefixUnaryExpressionSyntax;
			arrayLiteralExpression(openBracketToken: ISyntaxToken, expressions: ISeparatedSyntaxList, closeBracketToken: ISyntaxToken): ArrayLiteralExpressionSyntax;
			omittedExpression(): OmittedExpressionSyntax;
			parenthesizedExpression(openParenToken: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken): ParenthesizedExpressionSyntax;
			simpleArrowFunctionExpression(identifier: ISyntaxToken, equalsGreaterThanToken: ISyntaxToken, block: BlockSyntax, expression: IExpressionSyntax): SimpleArrowFunctionExpressionSyntax;
			parenthesizedArrowFunctionExpression(callSignature: CallSignatureSyntax, equalsGreaterThanToken: ISyntaxToken, block: BlockSyntax, expression: IExpressionSyntax): ParenthesizedArrowFunctionExpressionSyntax;
			qualifiedName(left: INameSyntax, dotToken: ISyntaxToken, right: ISyntaxToken): QualifiedNameSyntax;
			typeArgumentList(lessThanToken: ISyntaxToken, typeArguments: ISeparatedSyntaxList, greaterThanToken: ISyntaxToken): TypeArgumentListSyntax;
			constructorType(newKeyword: ISyntaxToken, typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, equalsGreaterThanToken: ISyntaxToken, type: ITypeSyntax): ConstructorTypeSyntax;
			functionType(typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, equalsGreaterThanToken: ISyntaxToken, type: ITypeSyntax): FunctionTypeSyntax;
			objectType(openBraceToken: ISyntaxToken, typeMembers: ISeparatedSyntaxList, closeBraceToken: ISyntaxToken): ObjectTypeSyntax;
			arrayType(type: ITypeSyntax, openBracketToken: ISyntaxToken, closeBracketToken: ISyntaxToken): ArrayTypeSyntax;
			genericType(name: INameSyntax, typeArgumentList: TypeArgumentListSyntax): GenericTypeSyntax;
			typeQuery(typeOfKeyword: ISyntaxToken, name: INameSyntax): TypeQuerySyntax;
			typeAnnotation(colonToken: ISyntaxToken, type: ITypeSyntax): TypeAnnotationSyntax;
			block(openBraceToken: ISyntaxToken, statements: ISyntaxList, closeBraceToken: ISyntaxToken): BlockSyntax;
			parameter(dotDotDotToken: ISyntaxToken, modifiers: ISyntaxList, identifier: ISyntaxToken, questionToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, equalsValueClause: EqualsValueClauseSyntax): ParameterSyntax;
			memberAccessExpression(expression: IExpressionSyntax, dotToken: ISyntaxToken, name: ISyntaxToken): MemberAccessExpressionSyntax;
			postfixUnaryExpression(kind: SyntaxKind, operand: IMemberExpressionSyntax, operatorToken: ISyntaxToken): PostfixUnaryExpressionSyntax;
			elementAccessExpression(expression: IExpressionSyntax, openBracketToken: ISyntaxToken, argumentExpression: IExpressionSyntax, closeBracketToken: ISyntaxToken): ElementAccessExpressionSyntax;
			invocationExpression(expression: IMemberExpressionSyntax, argumentList: ArgumentListSyntax): InvocationExpressionSyntax;
			argumentList(typeArgumentList: TypeArgumentListSyntax, openParenToken: ISyntaxToken, arguments: ISeparatedSyntaxList, closeParenToken: ISyntaxToken): ArgumentListSyntax;
			binaryExpression(kind: SyntaxKind, left: IExpressionSyntax, operatorToken: ISyntaxToken, right: IExpressionSyntax): BinaryExpressionSyntax;
			conditionalExpression(condition: IExpressionSyntax, questionToken: ISyntaxToken, whenTrue: IExpressionSyntax, colonToken: ISyntaxToken, whenFalse: IExpressionSyntax): ConditionalExpressionSyntax;
			constructSignature(newKeyword: ISyntaxToken, callSignature: CallSignatureSyntax): ConstructSignatureSyntax;
			methodSignature(propertyName: ISyntaxToken, questionToken: ISyntaxToken, callSignature: CallSignatureSyntax): MethodSignatureSyntax;
			indexSignature(openBracketToken: ISyntaxToken, parameter: ParameterSyntax, closeBracketToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax): IndexSignatureSyntax;
			propertySignature(propertyName: ISyntaxToken, questionToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax): PropertySignatureSyntax;
			callSignature(typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, typeAnnotation: TypeAnnotationSyntax): CallSignatureSyntax;
			parameterList(openParenToken: ISyntaxToken, parameters: ISeparatedSyntaxList, closeParenToken: ISyntaxToken): ParameterListSyntax;
			typeParameterList(lessThanToken: ISyntaxToken, typeParameters: ISeparatedSyntaxList, greaterThanToken: ISyntaxToken): TypeParameterListSyntax;
			typeParameter(identifier: ISyntaxToken, constraint: ConstraintSyntax): TypeParameterSyntax;
			constraint(extendsKeyword: ISyntaxToken, type: ITypeSyntax): ConstraintSyntax;
			elseClause(elseKeyword: ISyntaxToken, statement: IStatementSyntax): ElseClauseSyntax;
			ifStatement(ifKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax, elseClause: ElseClauseSyntax): IfStatementSyntax;
			expressionStatement(expression: IExpressionSyntax, semicolonToken: ISyntaxToken): ExpressionStatementSyntax;
			constructorDeclaration(modifiers: ISyntaxList, constructorKeyword: ISyntaxToken, parameterList: ParameterListSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken): ConstructorDeclarationSyntax;
			memberFunctionDeclaration(modifiers: ISyntaxList, propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken): MemberFunctionDeclarationSyntax;
			getAccessor(modifiers: ISyntaxList, getKeyword: ISyntaxToken, propertyName: ISyntaxToken, parameterList: ParameterListSyntax, typeAnnotation: TypeAnnotationSyntax, block: BlockSyntax): GetAccessorSyntax;
			setAccessor(modifiers: ISyntaxList, setKeyword: ISyntaxToken, propertyName: ISyntaxToken, parameterList: ParameterListSyntax, block: BlockSyntax): SetAccessorSyntax;
			memberVariableDeclaration(modifiers: ISyntaxList, variableDeclarator: VariableDeclaratorSyntax, semicolonToken: ISyntaxToken): MemberVariableDeclarationSyntax;
			indexMemberDeclaration(modifiers: ISyntaxList, indexSignature: IndexSignatureSyntax, semicolonToken: ISyntaxToken): IndexMemberDeclarationSyntax;
			throwStatement(throwKeyword: ISyntaxToken, expression: IExpressionSyntax, semicolonToken: ISyntaxToken): ThrowStatementSyntax;
			returnStatement(returnKeyword: ISyntaxToken, expression: IExpressionSyntax, semicolonToken: ISyntaxToken): ReturnStatementSyntax;
			objectCreationExpression(newKeyword: ISyntaxToken, expression: IMemberExpressionSyntax, argumentList: ArgumentListSyntax): ObjectCreationExpressionSyntax;
			switchStatement(switchKeyword: ISyntaxToken, openParenToken: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, openBraceToken: ISyntaxToken, switchClauses: ISyntaxList, closeBraceToken: ISyntaxToken): SwitchStatementSyntax;
			caseSwitchClause(caseKeyword: ISyntaxToken, expression: IExpressionSyntax, colonToken: ISyntaxToken, statements: ISyntaxList): CaseSwitchClauseSyntax;
			defaultSwitchClause(defaultKeyword: ISyntaxToken, colonToken: ISyntaxToken, statements: ISyntaxList): DefaultSwitchClauseSyntax;
			breakStatement(breakKeyword: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken): BreakStatementSyntax;
			continueStatement(continueKeyword: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken): ContinueStatementSyntax;
			forStatement(forKeyword: ISyntaxToken, openParenToken: ISyntaxToken, variableDeclaration: VariableDeclarationSyntax, initializer: IExpressionSyntax, firstSemicolonToken: ISyntaxToken, condition: IExpressionSyntax, secondSemicolonToken: ISyntaxToken, incrementor: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): ForStatementSyntax;
			forInStatement(forKeyword: ISyntaxToken, openParenToken: ISyntaxToken, variableDeclaration: VariableDeclarationSyntax, left: IExpressionSyntax, inKeyword: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): ForInStatementSyntax;
			whileStatement(whileKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): WhileStatementSyntax;
			withStatement(withKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): WithStatementSyntax;
			enumDeclaration(modifiers: ISyntaxList, enumKeyword: ISyntaxToken, identifier: ISyntaxToken, openBraceToken: ISyntaxToken, enumElements: ISeparatedSyntaxList, closeBraceToken: ISyntaxToken): EnumDeclarationSyntax;
			enumElement(propertyName: ISyntaxToken, equalsValueClause: EqualsValueClauseSyntax): EnumElementSyntax;
			castExpression(lessThanToken: ISyntaxToken, type: ITypeSyntax, greaterThanToken: ISyntaxToken, expression: IUnaryExpressionSyntax): CastExpressionSyntax;
			objectLiteralExpression(openBraceToken: ISyntaxToken, propertyAssignments: ISeparatedSyntaxList, closeBraceToken: ISyntaxToken): ObjectLiteralExpressionSyntax;
			simplePropertyAssignment(propertyName: ISyntaxToken, colonToken: ISyntaxToken, expression: IExpressionSyntax): SimplePropertyAssignmentSyntax;
			functionPropertyAssignment(propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax): FunctionPropertyAssignmentSyntax;
			functionExpression(functionKeyword: ISyntaxToken, identifier: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax): FunctionExpressionSyntax;
			emptyStatement(semicolonToken: ISyntaxToken): EmptyStatementSyntax;
			tryStatement(tryKeyword: ISyntaxToken, block: BlockSyntax, catchClause: CatchClauseSyntax, finallyClause: FinallyClauseSyntax): TryStatementSyntax;
			catchClause(catchKeyword: ISyntaxToken, openParenToken: ISyntaxToken, identifier: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, closeParenToken: ISyntaxToken, block: BlockSyntax): CatchClauseSyntax;
			finallyClause(finallyKeyword: ISyntaxToken, block: BlockSyntax): FinallyClauseSyntax;
			labeledStatement(identifier: ISyntaxToken, colonToken: ISyntaxToken, statement: IStatementSyntax): LabeledStatementSyntax;
			doStatement(doKeyword: ISyntaxToken, statement: IStatementSyntax, whileKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, semicolonToken: ISyntaxToken): DoStatementSyntax;
			typeOfExpression(typeOfKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax): TypeOfExpressionSyntax;
			deleteExpression(deleteKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax): DeleteExpressionSyntax;
			voidExpression(voidKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax): VoidExpressionSyntax;
			debuggerStatement(debuggerKeyword: ISyntaxToken, semicolonToken: ISyntaxToken): DebuggerStatementSyntax;
		}
		class NormalModeFactory implements IFactory {
			public sourceUnit(moduleElements: ISyntaxList, endOfFileToken: ISyntaxToken): SourceUnitSyntax;
			public externalModuleReference(requireKeyword: ISyntaxToken, openParenToken: ISyntaxToken, stringLiteral: ISyntaxToken, closeParenToken: ISyntaxToken): ExternalModuleReferenceSyntax;
			public moduleNameModuleReference(moduleName: INameSyntax): ModuleNameModuleReferenceSyntax;
			public importDeclaration(modifiers: ISyntaxList, importKeyword: ISyntaxToken, identifier: ISyntaxToken, equalsToken: ISyntaxToken, moduleReference: IModuleReferenceSyntax, semicolonToken: ISyntaxToken): ImportDeclarationSyntax;
			public exportAssignment(exportKeyword: ISyntaxToken, equalsToken: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken): ExportAssignmentSyntax;
			public classDeclaration(modifiers: ISyntaxList, classKeyword: ISyntaxToken, identifier: ISyntaxToken, typeParameterList: TypeParameterListSyntax, heritageClauses: ISyntaxList, openBraceToken: ISyntaxToken, classElements: ISyntaxList, closeBraceToken: ISyntaxToken): ClassDeclarationSyntax;
			public interfaceDeclaration(modifiers: ISyntaxList, interfaceKeyword: ISyntaxToken, identifier: ISyntaxToken, typeParameterList: TypeParameterListSyntax, heritageClauses: ISyntaxList, body: ObjectTypeSyntax): InterfaceDeclarationSyntax;
			public heritageClause(kind: SyntaxKind, extendsOrImplementsKeyword: ISyntaxToken, typeNames: ISeparatedSyntaxList): HeritageClauseSyntax;
			public moduleDeclaration(modifiers: ISyntaxList, moduleKeyword: ISyntaxToken, name: INameSyntax, stringLiteral: ISyntaxToken, openBraceToken: ISyntaxToken, moduleElements: ISyntaxList, closeBraceToken: ISyntaxToken): ModuleDeclarationSyntax;
			public functionDeclaration(modifiers: ISyntaxList, functionKeyword: ISyntaxToken, identifier: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken): FunctionDeclarationSyntax;
			public variableStatement(modifiers: ISyntaxList, variableDeclaration: VariableDeclarationSyntax, semicolonToken: ISyntaxToken): VariableStatementSyntax;
			public variableDeclaration(varKeyword: ISyntaxToken, variableDeclarators: ISeparatedSyntaxList): VariableDeclarationSyntax;
			public variableDeclarator(propertyName: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, equalsValueClause: EqualsValueClauseSyntax): VariableDeclaratorSyntax;
			public equalsValueClause(equalsToken: ISyntaxToken, value: IExpressionSyntax): EqualsValueClauseSyntax;
			public prefixUnaryExpression(kind: SyntaxKind, operatorToken: ISyntaxToken, operand: IUnaryExpressionSyntax): PrefixUnaryExpressionSyntax;
			public arrayLiteralExpression(openBracketToken: ISyntaxToken, expressions: ISeparatedSyntaxList, closeBracketToken: ISyntaxToken): ArrayLiteralExpressionSyntax;
			public omittedExpression(): OmittedExpressionSyntax;
			public parenthesizedExpression(openParenToken: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken): ParenthesizedExpressionSyntax;
			public simpleArrowFunctionExpression(identifier: ISyntaxToken, equalsGreaterThanToken: ISyntaxToken, block: BlockSyntax, expression: IExpressionSyntax): SimpleArrowFunctionExpressionSyntax;
			public parenthesizedArrowFunctionExpression(callSignature: CallSignatureSyntax, equalsGreaterThanToken: ISyntaxToken, block: BlockSyntax, expression: IExpressionSyntax): ParenthesizedArrowFunctionExpressionSyntax;
			public qualifiedName(left: INameSyntax, dotToken: ISyntaxToken, right: ISyntaxToken): QualifiedNameSyntax;
			public typeArgumentList(lessThanToken: ISyntaxToken, typeArguments: ISeparatedSyntaxList, greaterThanToken: ISyntaxToken): TypeArgumentListSyntax;
			public constructorType(newKeyword: ISyntaxToken, typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, equalsGreaterThanToken: ISyntaxToken, type: ITypeSyntax): ConstructorTypeSyntax;
			public functionType(typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, equalsGreaterThanToken: ISyntaxToken, type: ITypeSyntax): FunctionTypeSyntax;
			public objectType(openBraceToken: ISyntaxToken, typeMembers: ISeparatedSyntaxList, closeBraceToken: ISyntaxToken): ObjectTypeSyntax;
			public arrayType(type: ITypeSyntax, openBracketToken: ISyntaxToken, closeBracketToken: ISyntaxToken): ArrayTypeSyntax;
			public genericType(name: INameSyntax, typeArgumentList: TypeArgumentListSyntax): GenericTypeSyntax;
			public typeQuery(typeOfKeyword: ISyntaxToken, name: INameSyntax): TypeQuerySyntax;
			public typeAnnotation(colonToken: ISyntaxToken, type: ITypeSyntax): TypeAnnotationSyntax;
			public block(openBraceToken: ISyntaxToken, statements: ISyntaxList, closeBraceToken: ISyntaxToken): BlockSyntax;
			public parameter(dotDotDotToken: ISyntaxToken, modifiers: ISyntaxList, identifier: ISyntaxToken, questionToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, equalsValueClause: EqualsValueClauseSyntax): ParameterSyntax;
			public memberAccessExpression(expression: IExpressionSyntax, dotToken: ISyntaxToken, name: ISyntaxToken): MemberAccessExpressionSyntax;
			public postfixUnaryExpression(kind: SyntaxKind, operand: IMemberExpressionSyntax, operatorToken: ISyntaxToken): PostfixUnaryExpressionSyntax;
			public elementAccessExpression(expression: IExpressionSyntax, openBracketToken: ISyntaxToken, argumentExpression: IExpressionSyntax, closeBracketToken: ISyntaxToken): ElementAccessExpressionSyntax;
			public invocationExpression(expression: IMemberExpressionSyntax, argumentList: ArgumentListSyntax): InvocationExpressionSyntax;
			public argumentList(typeArgumentList: TypeArgumentListSyntax, openParenToken: ISyntaxToken, _arguments: ISeparatedSyntaxList, closeParenToken: ISyntaxToken): ArgumentListSyntax;
			public binaryExpression(kind: SyntaxKind, left: IExpressionSyntax, operatorToken: ISyntaxToken, right: IExpressionSyntax): BinaryExpressionSyntax;
			public conditionalExpression(condition: IExpressionSyntax, questionToken: ISyntaxToken, whenTrue: IExpressionSyntax, colonToken: ISyntaxToken, whenFalse: IExpressionSyntax): ConditionalExpressionSyntax;
			public constructSignature(newKeyword: ISyntaxToken, callSignature: CallSignatureSyntax): ConstructSignatureSyntax;
			public methodSignature(propertyName: ISyntaxToken, questionToken: ISyntaxToken, callSignature: CallSignatureSyntax): MethodSignatureSyntax;
			public indexSignature(openBracketToken: ISyntaxToken, parameter: ParameterSyntax, closeBracketToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax): IndexSignatureSyntax;
			public propertySignature(propertyName: ISyntaxToken, questionToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax): PropertySignatureSyntax;
			public callSignature(typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, typeAnnotation: TypeAnnotationSyntax): CallSignatureSyntax;
			public parameterList(openParenToken: ISyntaxToken, parameters: ISeparatedSyntaxList, closeParenToken: ISyntaxToken): ParameterListSyntax;
			public typeParameterList(lessThanToken: ISyntaxToken, typeParameters: ISeparatedSyntaxList, greaterThanToken: ISyntaxToken): TypeParameterListSyntax;
			public typeParameter(identifier: ISyntaxToken, constraint: ConstraintSyntax): TypeParameterSyntax;
			public constraint(extendsKeyword: ISyntaxToken, type: ITypeSyntax): ConstraintSyntax;
			public elseClause(elseKeyword: ISyntaxToken, statement: IStatementSyntax): ElseClauseSyntax;
			public ifStatement(ifKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax, elseClause: ElseClauseSyntax): IfStatementSyntax;
			public expressionStatement(expression: IExpressionSyntax, semicolonToken: ISyntaxToken): ExpressionStatementSyntax;
			public constructorDeclaration(modifiers: ISyntaxList, constructorKeyword: ISyntaxToken, parameterList: ParameterListSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken): ConstructorDeclarationSyntax;
			public memberFunctionDeclaration(modifiers: ISyntaxList, propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken): MemberFunctionDeclarationSyntax;
			public getAccessor(modifiers: ISyntaxList, getKeyword: ISyntaxToken, propertyName: ISyntaxToken, parameterList: ParameterListSyntax, typeAnnotation: TypeAnnotationSyntax, block: BlockSyntax): GetAccessorSyntax;
			public setAccessor(modifiers: ISyntaxList, setKeyword: ISyntaxToken, propertyName: ISyntaxToken, parameterList: ParameterListSyntax, block: BlockSyntax): SetAccessorSyntax;
			public memberVariableDeclaration(modifiers: ISyntaxList, variableDeclarator: VariableDeclaratorSyntax, semicolonToken: ISyntaxToken): MemberVariableDeclarationSyntax;
			public indexMemberDeclaration(modifiers: ISyntaxList, indexSignature: IndexSignatureSyntax, semicolonToken: ISyntaxToken): IndexMemberDeclarationSyntax;
			public throwStatement(throwKeyword: ISyntaxToken, expression: IExpressionSyntax, semicolonToken: ISyntaxToken): ThrowStatementSyntax;
			public returnStatement(returnKeyword: ISyntaxToken, expression: IExpressionSyntax, semicolonToken: ISyntaxToken): ReturnStatementSyntax;
			public objectCreationExpression(newKeyword: ISyntaxToken, expression: IMemberExpressionSyntax, argumentList: ArgumentListSyntax): ObjectCreationExpressionSyntax;
			public switchStatement(switchKeyword: ISyntaxToken, openParenToken: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, openBraceToken: ISyntaxToken, switchClauses: ISyntaxList, closeBraceToken: ISyntaxToken): SwitchStatementSyntax;
			public caseSwitchClause(caseKeyword: ISyntaxToken, expression: IExpressionSyntax, colonToken: ISyntaxToken, statements: ISyntaxList): CaseSwitchClauseSyntax;
			public defaultSwitchClause(defaultKeyword: ISyntaxToken, colonToken: ISyntaxToken, statements: ISyntaxList): DefaultSwitchClauseSyntax;
			public breakStatement(breakKeyword: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken): BreakStatementSyntax;
			public continueStatement(continueKeyword: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken): ContinueStatementSyntax;
			public forStatement(forKeyword: ISyntaxToken, openParenToken: ISyntaxToken, variableDeclaration: VariableDeclarationSyntax, initializer: IExpressionSyntax, firstSemicolonToken: ISyntaxToken, condition: IExpressionSyntax, secondSemicolonToken: ISyntaxToken, incrementor: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): ForStatementSyntax;
			public forInStatement(forKeyword: ISyntaxToken, openParenToken: ISyntaxToken, variableDeclaration: VariableDeclarationSyntax, left: IExpressionSyntax, inKeyword: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): ForInStatementSyntax;
			public whileStatement(whileKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): WhileStatementSyntax;
			public withStatement(withKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): WithStatementSyntax;
			public enumDeclaration(modifiers: ISyntaxList, enumKeyword: ISyntaxToken, identifier: ISyntaxToken, openBraceToken: ISyntaxToken, enumElements: ISeparatedSyntaxList, closeBraceToken: ISyntaxToken): EnumDeclarationSyntax;
			public enumElement(propertyName: ISyntaxToken, equalsValueClause: EqualsValueClauseSyntax): EnumElementSyntax;
			public castExpression(lessThanToken: ISyntaxToken, type: ITypeSyntax, greaterThanToken: ISyntaxToken, expression: IUnaryExpressionSyntax): CastExpressionSyntax;
			public objectLiteralExpression(openBraceToken: ISyntaxToken, propertyAssignments: ISeparatedSyntaxList, closeBraceToken: ISyntaxToken): ObjectLiteralExpressionSyntax;
			public simplePropertyAssignment(propertyName: ISyntaxToken, colonToken: ISyntaxToken, expression: IExpressionSyntax): SimplePropertyAssignmentSyntax;
			public functionPropertyAssignment(propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax): FunctionPropertyAssignmentSyntax;
			public functionExpression(functionKeyword: ISyntaxToken, identifier: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax): FunctionExpressionSyntax;
			public emptyStatement(semicolonToken: ISyntaxToken): EmptyStatementSyntax;
			public tryStatement(tryKeyword: ISyntaxToken, block: BlockSyntax, catchClause: CatchClauseSyntax, finallyClause: FinallyClauseSyntax): TryStatementSyntax;
			public catchClause(catchKeyword: ISyntaxToken, openParenToken: ISyntaxToken, identifier: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, closeParenToken: ISyntaxToken, block: BlockSyntax): CatchClauseSyntax;
			public finallyClause(finallyKeyword: ISyntaxToken, block: BlockSyntax): FinallyClauseSyntax;
			public labeledStatement(identifier: ISyntaxToken, colonToken: ISyntaxToken, statement: IStatementSyntax): LabeledStatementSyntax;
			public doStatement(doKeyword: ISyntaxToken, statement: IStatementSyntax, whileKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, semicolonToken: ISyntaxToken): DoStatementSyntax;
			public typeOfExpression(typeOfKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax): TypeOfExpressionSyntax;
			public deleteExpression(deleteKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax): DeleteExpressionSyntax;
			public voidExpression(voidKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax): VoidExpressionSyntax;
			public debuggerStatement(debuggerKeyword: ISyntaxToken, semicolonToken: ISyntaxToken): DebuggerStatementSyntax;
		}
		class StrictModeFactory implements IFactory {
			public sourceUnit(moduleElements: ISyntaxList, endOfFileToken: ISyntaxToken): SourceUnitSyntax;
			public externalModuleReference(requireKeyword: ISyntaxToken, openParenToken: ISyntaxToken, stringLiteral: ISyntaxToken, closeParenToken: ISyntaxToken): ExternalModuleReferenceSyntax;
			public moduleNameModuleReference(moduleName: INameSyntax): ModuleNameModuleReferenceSyntax;
			public importDeclaration(modifiers: ISyntaxList, importKeyword: ISyntaxToken, identifier: ISyntaxToken, equalsToken: ISyntaxToken, moduleReference: IModuleReferenceSyntax, semicolonToken: ISyntaxToken): ImportDeclarationSyntax;
			public exportAssignment(exportKeyword: ISyntaxToken, equalsToken: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken): ExportAssignmentSyntax;
			public classDeclaration(modifiers: ISyntaxList, classKeyword: ISyntaxToken, identifier: ISyntaxToken, typeParameterList: TypeParameterListSyntax, heritageClauses: ISyntaxList, openBraceToken: ISyntaxToken, classElements: ISyntaxList, closeBraceToken: ISyntaxToken): ClassDeclarationSyntax;
			public interfaceDeclaration(modifiers: ISyntaxList, interfaceKeyword: ISyntaxToken, identifier: ISyntaxToken, typeParameterList: TypeParameterListSyntax, heritageClauses: ISyntaxList, body: ObjectTypeSyntax): InterfaceDeclarationSyntax;
			public heritageClause(kind: SyntaxKind, extendsOrImplementsKeyword: ISyntaxToken, typeNames: ISeparatedSyntaxList): HeritageClauseSyntax;
			public moduleDeclaration(modifiers: ISyntaxList, moduleKeyword: ISyntaxToken, name: INameSyntax, stringLiteral: ISyntaxToken, openBraceToken: ISyntaxToken, moduleElements: ISyntaxList, closeBraceToken: ISyntaxToken): ModuleDeclarationSyntax;
			public functionDeclaration(modifiers: ISyntaxList, functionKeyword: ISyntaxToken, identifier: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken): FunctionDeclarationSyntax;
			public variableStatement(modifiers: ISyntaxList, variableDeclaration: VariableDeclarationSyntax, semicolonToken: ISyntaxToken): VariableStatementSyntax;
			public variableDeclaration(varKeyword: ISyntaxToken, variableDeclarators: ISeparatedSyntaxList): VariableDeclarationSyntax;
			public variableDeclarator(propertyName: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, equalsValueClause: EqualsValueClauseSyntax): VariableDeclaratorSyntax;
			public equalsValueClause(equalsToken: ISyntaxToken, value: IExpressionSyntax): EqualsValueClauseSyntax;
			public prefixUnaryExpression(kind: SyntaxKind, operatorToken: ISyntaxToken, operand: IUnaryExpressionSyntax): PrefixUnaryExpressionSyntax;
			public arrayLiteralExpression(openBracketToken: ISyntaxToken, expressions: ISeparatedSyntaxList, closeBracketToken: ISyntaxToken): ArrayLiteralExpressionSyntax;
			public omittedExpression(): OmittedExpressionSyntax;
			public parenthesizedExpression(openParenToken: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken): ParenthesizedExpressionSyntax;
			public simpleArrowFunctionExpression(identifier: ISyntaxToken, equalsGreaterThanToken: ISyntaxToken, block: BlockSyntax, expression: IExpressionSyntax): SimpleArrowFunctionExpressionSyntax;
			public parenthesizedArrowFunctionExpression(callSignature: CallSignatureSyntax, equalsGreaterThanToken: ISyntaxToken, block: BlockSyntax, expression: IExpressionSyntax): ParenthesizedArrowFunctionExpressionSyntax;
			public qualifiedName(left: INameSyntax, dotToken: ISyntaxToken, right: ISyntaxToken): QualifiedNameSyntax;
			public typeArgumentList(lessThanToken: ISyntaxToken, typeArguments: ISeparatedSyntaxList, greaterThanToken: ISyntaxToken): TypeArgumentListSyntax;
			public constructorType(newKeyword: ISyntaxToken, typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, equalsGreaterThanToken: ISyntaxToken, type: ITypeSyntax): ConstructorTypeSyntax;
			public functionType(typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, equalsGreaterThanToken: ISyntaxToken, type: ITypeSyntax): FunctionTypeSyntax;
			public objectType(openBraceToken: ISyntaxToken, typeMembers: ISeparatedSyntaxList, closeBraceToken: ISyntaxToken): ObjectTypeSyntax;
			public arrayType(type: ITypeSyntax, openBracketToken: ISyntaxToken, closeBracketToken: ISyntaxToken): ArrayTypeSyntax;
			public genericType(name: INameSyntax, typeArgumentList: TypeArgumentListSyntax): GenericTypeSyntax;
			public typeQuery(typeOfKeyword: ISyntaxToken, name: INameSyntax): TypeQuerySyntax;
			public typeAnnotation(colonToken: ISyntaxToken, type: ITypeSyntax): TypeAnnotationSyntax;
			public block(openBraceToken: ISyntaxToken, statements: ISyntaxList, closeBraceToken: ISyntaxToken): BlockSyntax;
			public parameter(dotDotDotToken: ISyntaxToken, modifiers: ISyntaxList, identifier: ISyntaxToken, questionToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, equalsValueClause: EqualsValueClauseSyntax): ParameterSyntax;
			public memberAccessExpression(expression: IExpressionSyntax, dotToken: ISyntaxToken, name: ISyntaxToken): MemberAccessExpressionSyntax;
			public postfixUnaryExpression(kind: SyntaxKind, operand: IMemberExpressionSyntax, operatorToken: ISyntaxToken): PostfixUnaryExpressionSyntax;
			public elementAccessExpression(expression: IExpressionSyntax, openBracketToken: ISyntaxToken, argumentExpression: IExpressionSyntax, closeBracketToken: ISyntaxToken): ElementAccessExpressionSyntax;
			public invocationExpression(expression: IMemberExpressionSyntax, argumentList: ArgumentListSyntax): InvocationExpressionSyntax;
			public argumentList(typeArgumentList: TypeArgumentListSyntax, openParenToken: ISyntaxToken, _arguments: ISeparatedSyntaxList, closeParenToken: ISyntaxToken): ArgumentListSyntax;
			public binaryExpression(kind: SyntaxKind, left: IExpressionSyntax, operatorToken: ISyntaxToken, right: IExpressionSyntax): BinaryExpressionSyntax;
			public conditionalExpression(condition: IExpressionSyntax, questionToken: ISyntaxToken, whenTrue: IExpressionSyntax, colonToken: ISyntaxToken, whenFalse: IExpressionSyntax): ConditionalExpressionSyntax;
			public constructSignature(newKeyword: ISyntaxToken, callSignature: CallSignatureSyntax): ConstructSignatureSyntax;
			public methodSignature(propertyName: ISyntaxToken, questionToken: ISyntaxToken, callSignature: CallSignatureSyntax): MethodSignatureSyntax;
			public indexSignature(openBracketToken: ISyntaxToken, parameter: ParameterSyntax, closeBracketToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax): IndexSignatureSyntax;
			public propertySignature(propertyName: ISyntaxToken, questionToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax): PropertySignatureSyntax;
			public callSignature(typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, typeAnnotation: TypeAnnotationSyntax): CallSignatureSyntax;
			public parameterList(openParenToken: ISyntaxToken, parameters: ISeparatedSyntaxList, closeParenToken: ISyntaxToken): ParameterListSyntax;
			public typeParameterList(lessThanToken: ISyntaxToken, typeParameters: ISeparatedSyntaxList, greaterThanToken: ISyntaxToken): TypeParameterListSyntax;
			public typeParameter(identifier: ISyntaxToken, constraint: ConstraintSyntax): TypeParameterSyntax;
			public constraint(extendsKeyword: ISyntaxToken, type: ITypeSyntax): ConstraintSyntax;
			public elseClause(elseKeyword: ISyntaxToken, statement: IStatementSyntax): ElseClauseSyntax;
			public ifStatement(ifKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax, elseClause: ElseClauseSyntax): IfStatementSyntax;
			public expressionStatement(expression: IExpressionSyntax, semicolonToken: ISyntaxToken): ExpressionStatementSyntax;
			public constructorDeclaration(modifiers: ISyntaxList, constructorKeyword: ISyntaxToken, parameterList: ParameterListSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken): ConstructorDeclarationSyntax;
			public memberFunctionDeclaration(modifiers: ISyntaxList, propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken): MemberFunctionDeclarationSyntax;
			public getAccessor(modifiers: ISyntaxList, getKeyword: ISyntaxToken, propertyName: ISyntaxToken, parameterList: ParameterListSyntax, typeAnnotation: TypeAnnotationSyntax, block: BlockSyntax): GetAccessorSyntax;
			public setAccessor(modifiers: ISyntaxList, setKeyword: ISyntaxToken, propertyName: ISyntaxToken, parameterList: ParameterListSyntax, block: BlockSyntax): SetAccessorSyntax;
			public memberVariableDeclaration(modifiers: ISyntaxList, variableDeclarator: VariableDeclaratorSyntax, semicolonToken: ISyntaxToken): MemberVariableDeclarationSyntax;
			public indexMemberDeclaration(modifiers: ISyntaxList, indexSignature: IndexSignatureSyntax, semicolonToken: ISyntaxToken): IndexMemberDeclarationSyntax;
			public throwStatement(throwKeyword: ISyntaxToken, expression: IExpressionSyntax, semicolonToken: ISyntaxToken): ThrowStatementSyntax;
			public returnStatement(returnKeyword: ISyntaxToken, expression: IExpressionSyntax, semicolonToken: ISyntaxToken): ReturnStatementSyntax;
			public objectCreationExpression(newKeyword: ISyntaxToken, expression: IMemberExpressionSyntax, argumentList: ArgumentListSyntax): ObjectCreationExpressionSyntax;
			public switchStatement(switchKeyword: ISyntaxToken, openParenToken: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, openBraceToken: ISyntaxToken, switchClauses: ISyntaxList, closeBraceToken: ISyntaxToken): SwitchStatementSyntax;
			public caseSwitchClause(caseKeyword: ISyntaxToken, expression: IExpressionSyntax, colonToken: ISyntaxToken, statements: ISyntaxList): CaseSwitchClauseSyntax;
			public defaultSwitchClause(defaultKeyword: ISyntaxToken, colonToken: ISyntaxToken, statements: ISyntaxList): DefaultSwitchClauseSyntax;
			public breakStatement(breakKeyword: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken): BreakStatementSyntax;
			public continueStatement(continueKeyword: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken): ContinueStatementSyntax;
			public forStatement(forKeyword: ISyntaxToken, openParenToken: ISyntaxToken, variableDeclaration: VariableDeclarationSyntax, initializer: IExpressionSyntax, firstSemicolonToken: ISyntaxToken, condition: IExpressionSyntax, secondSemicolonToken: ISyntaxToken, incrementor: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): ForStatementSyntax;
			public forInStatement(forKeyword: ISyntaxToken, openParenToken: ISyntaxToken, variableDeclaration: VariableDeclarationSyntax, left: IExpressionSyntax, inKeyword: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): ForInStatementSyntax;
			public whileStatement(whileKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): WhileStatementSyntax;
			public withStatement(withKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): WithStatementSyntax;
			public enumDeclaration(modifiers: ISyntaxList, enumKeyword: ISyntaxToken, identifier: ISyntaxToken, openBraceToken: ISyntaxToken, enumElements: ISeparatedSyntaxList, closeBraceToken: ISyntaxToken): EnumDeclarationSyntax;
			public enumElement(propertyName: ISyntaxToken, equalsValueClause: EqualsValueClauseSyntax): EnumElementSyntax;
			public castExpression(lessThanToken: ISyntaxToken, type: ITypeSyntax, greaterThanToken: ISyntaxToken, expression: IUnaryExpressionSyntax): CastExpressionSyntax;
			public objectLiteralExpression(openBraceToken: ISyntaxToken, propertyAssignments: ISeparatedSyntaxList, closeBraceToken: ISyntaxToken): ObjectLiteralExpressionSyntax;
			public simplePropertyAssignment(propertyName: ISyntaxToken, colonToken: ISyntaxToken, expression: IExpressionSyntax): SimplePropertyAssignmentSyntax;
			public functionPropertyAssignment(propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax): FunctionPropertyAssignmentSyntax;
			public functionExpression(functionKeyword: ISyntaxToken, identifier: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax): FunctionExpressionSyntax;
			public emptyStatement(semicolonToken: ISyntaxToken): EmptyStatementSyntax;
			public tryStatement(tryKeyword: ISyntaxToken, block: BlockSyntax, catchClause: CatchClauseSyntax, finallyClause: FinallyClauseSyntax): TryStatementSyntax;
			public catchClause(catchKeyword: ISyntaxToken, openParenToken: ISyntaxToken, identifier: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, closeParenToken: ISyntaxToken, block: BlockSyntax): CatchClauseSyntax;
			public finallyClause(finallyKeyword: ISyntaxToken, block: BlockSyntax): FinallyClauseSyntax;
			public labeledStatement(identifier: ISyntaxToken, colonToken: ISyntaxToken, statement: IStatementSyntax): LabeledStatementSyntax;
			public doStatement(doKeyword: ISyntaxToken, statement: IStatementSyntax, whileKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, semicolonToken: ISyntaxToken): DoStatementSyntax;
			public typeOfExpression(typeOfKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax): TypeOfExpressionSyntax;
			public deleteExpression(deleteKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax): DeleteExpressionSyntax;
			public voidExpression(voidKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax): VoidExpressionSyntax;
			public debuggerStatement(debuggerKeyword: ISyntaxToken, semicolonToken: ISyntaxToken): DebuggerStatementSyntax;
		}
		var normalModeFactory: IFactory;
		var strictModeFactory: IFactory;
		class EmptySyntaxList implements ISyntaxList {
			public kind(): SyntaxKind;
			public isNode(): boolean;
			public isToken(): boolean;
			public isList(): boolean;
			public isSeparatedList(): boolean;
			public toJSON(key: any): any;
			public childCount(): number;
			public childAt(index: number): ISyntaxNodeOrToken;
			public toArray(): ISyntaxNodeOrToken[];
			public collectTextElements(elements: string[]): void;
			public firstToken(): ISyntaxToken;
			public lastToken(): ISyntaxToken;
			public fullWidth(): number;
			public width(): number;
			public leadingTrivia(): ISyntaxTriviaList;
			public trailingTrivia(): ISyntaxTriviaList;
			public leadingTriviaWidth(): number;
			public trailingTriviaWidth(): number;
			public fullText(): string;
			public isTypeScriptSpecific(): boolean;
			public isIncrementallyUnusable(): boolean;
			public findTokenInternal(parent: PositionedElement, position: number, fullStart: number): PositionedToken;
			public insertChildrenInto(array: ISyntaxElement[], index: number): void;
		}
		var emptyList: ISyntaxList;
		function list(nodes: ISyntaxNodeOrToken[]): ISyntaxList;
		class VariableWidthTokenWithNoTrivia implements ISyntaxToken {
			private _sourceText;
			private _fullStart;
			public tokenKind: SyntaxKind;
			private _textOrWidth;
			constructor(sourceText: ISimpleText, fullStart: number, kind: SyntaxKind, textOrWidth: any);
			public clone(): ISyntaxToken;
			public isNode(): boolean;
			public isToken(): boolean;
			public isList(): boolean;
			public isSeparatedList(): boolean;
			public kind(): SyntaxKind;
			public childCount(): number;
			public childAt(index: number): ISyntaxElement;
			public fullWidth(): number;
			private start();
			private end();
			public width(): number;
			public text(): string;
			public fullText(): string;
			public value(): any;
			public valueText(): string;
			public hasLeadingTrivia(): boolean;
			public hasLeadingComment(): boolean;
			public hasLeadingNewLine(): boolean;
			public hasLeadingSkippedText(): boolean;
			public leadingTriviaWidth(): number;
			public leadingTrivia(): ISyntaxTriviaList;
			public hasTrailingTrivia(): boolean;
			public hasTrailingComment(): boolean;
			public hasTrailingNewLine(): boolean;
			public hasTrailingSkippedText(): boolean;
			public trailingTriviaWidth(): number;
			public trailingTrivia(): ISyntaxTriviaList;
			public hasSkippedToken(): boolean;
			public toJSON(key: any): any;
			public firstToken(): ISyntaxToken;
			public lastToken(): ISyntaxToken;
			public isTypeScriptSpecific(): boolean;
			public isIncrementallyUnusable(): boolean;
			public accept(visitor: ISyntaxVisitor): any;
			private realize();
			public collectTextElements(elements: string[]): void;
			private findTokenInternal(parent, position, fullStart);
			public withLeadingTrivia(leadingTrivia: ISyntaxTriviaList): ISyntaxToken;
			public withTrailingTrivia(trailingTrivia: ISyntaxTriviaList): ISyntaxToken;
			public isExpression(): boolean;
			public isPrimaryExpression(): boolean;
			public isMemberExpression(): boolean;
			public isPostfixExpression(): boolean;
			public isUnaryExpression(): boolean;
		}
		class VariableWidthTokenWithLeadingTrivia implements ISyntaxToken {
			private _sourceText;
			private _fullStart;
			public tokenKind: SyntaxKind;
			private _leadingTriviaInfo;
			private _textOrWidth;
			constructor(sourceText: ISimpleText, fullStart: number, kind: SyntaxKind, leadingTriviaInfo: number, textOrWidth: any);
			public clone(): ISyntaxToken;
			public isNode(): boolean;
			public isToken(): boolean;
			public isList(): boolean;
			public isSeparatedList(): boolean;
			public kind(): SyntaxKind;
			public childCount(): number;
			public childAt(index: number): ISyntaxElement;
			public fullWidth(): number;
			private start();
			private end();
			public width(): number;
			public text(): string;
			public fullText(): string;
			public value(): any;
			public valueText(): string;
			public hasLeadingTrivia(): boolean;
			public hasLeadingComment(): boolean;
			public hasLeadingNewLine(): boolean;
			public hasLeadingSkippedText(): boolean;
			public leadingTriviaWidth(): number;
			public leadingTrivia(): ISyntaxTriviaList;
			public hasTrailingTrivia(): boolean;
			public hasTrailingComment(): boolean;
			public hasTrailingNewLine(): boolean;
			public hasTrailingSkippedText(): boolean;
			public trailingTriviaWidth(): number;
			public trailingTrivia(): ISyntaxTriviaList;
			public hasSkippedToken(): boolean;
			public toJSON(key: any): any;
			public firstToken(): ISyntaxToken;
			public lastToken(): ISyntaxToken;
			public isTypeScriptSpecific(): boolean;
			public isIncrementallyUnusable(): boolean;
			public accept(visitor: ISyntaxVisitor): any;
			private realize();
			public collectTextElements(elements: string[]): void;
			private findTokenInternal(parent, position, fullStart);
			public withLeadingTrivia(leadingTrivia: ISyntaxTriviaList): ISyntaxToken;
			public withTrailingTrivia(trailingTrivia: ISyntaxTriviaList): ISyntaxToken;
			public isExpression(): boolean;
			public isPrimaryExpression(): boolean;
			public isMemberExpression(): boolean;
			public isPostfixExpression(): boolean;
			public isUnaryExpression(): boolean;
		}
		class VariableWidthTokenWithTrailingTrivia implements ISyntaxToken {
			private _sourceText;
			private _fullStart;
			public tokenKind: SyntaxKind;
			private _textOrWidth;
			private _trailingTriviaInfo;
			constructor(sourceText: ISimpleText, fullStart: number, kind: SyntaxKind, textOrWidth: any, trailingTriviaInfo: number);
			public clone(): ISyntaxToken;
			public isNode(): boolean;
			public isToken(): boolean;
			public isList(): boolean;
			public isSeparatedList(): boolean;
			public kind(): SyntaxKind;
			public childCount(): number;
			public childAt(index: number): ISyntaxElement;
			public fullWidth(): number;
			private start();
			private end();
			public width(): number;
			public text(): string;
			public fullText(): string;
			public value(): any;
			public valueText(): string;
			public hasLeadingTrivia(): boolean;
			public hasLeadingComment(): boolean;
			public hasLeadingNewLine(): boolean;
			public hasLeadingSkippedText(): boolean;
			public leadingTriviaWidth(): number;
			public leadingTrivia(): ISyntaxTriviaList;
			public hasTrailingTrivia(): boolean;
			public hasTrailingComment(): boolean;
			public hasTrailingNewLine(): boolean;
			public hasTrailingSkippedText(): boolean;
			public trailingTriviaWidth(): number;
			public trailingTrivia(): ISyntaxTriviaList;
			public hasSkippedToken(): boolean;
			public toJSON(key: any): any;
			public firstToken(): ISyntaxToken;
			public lastToken(): ISyntaxToken;
			public isTypeScriptSpecific(): boolean;
			public isIncrementallyUnusable(): boolean;
			public accept(visitor: ISyntaxVisitor): any;
			private realize();
			public collectTextElements(elements: string[]): void;
			private findTokenInternal(parent, position, fullStart);
			public withLeadingTrivia(leadingTrivia: ISyntaxTriviaList): ISyntaxToken;
			public withTrailingTrivia(trailingTrivia: ISyntaxTriviaList): ISyntaxToken;
			public isExpression(): boolean;
			public isPrimaryExpression(): boolean;
			public isMemberExpression(): boolean;
			public isPostfixExpression(): boolean;
			public isUnaryExpression(): boolean;
		}
		class VariableWidthTokenWithLeadingAndTrailingTrivia implements ISyntaxToken {
			private _sourceText;
			private _fullStart;
			public tokenKind: SyntaxKind;
			private _leadingTriviaInfo;
			private _textOrWidth;
			private _trailingTriviaInfo;
			constructor(sourceText: ISimpleText, fullStart: number, kind: SyntaxKind, leadingTriviaInfo: number, textOrWidth: any, trailingTriviaInfo: number);
			public clone(): ISyntaxToken;
			public isNode(): boolean;
			public isToken(): boolean;
			public isList(): boolean;
			public isSeparatedList(): boolean;
			public kind(): SyntaxKind;
			public childCount(): number;
			public childAt(index: number): ISyntaxElement;
			public fullWidth(): number;
			private start();
			private end();
			public width(): number;
			public text(): string;
			public fullText(): string;
			public value(): any;
			public valueText(): string;
			public hasLeadingTrivia(): boolean;
			public hasLeadingComment(): boolean;
			public hasLeadingNewLine(): boolean;
			public hasLeadingSkippedText(): boolean;
			public leadingTriviaWidth(): number;
			public leadingTrivia(): ISyntaxTriviaList;
			public hasTrailingTrivia(): boolean;
			public hasTrailingComment(): boolean;
			public hasTrailingNewLine(): boolean;
			public hasTrailingSkippedText(): boolean;
			public trailingTriviaWidth(): number;
			public trailingTrivia(): ISyntaxTriviaList;
			public hasSkippedToken(): boolean;
			public toJSON(key: any): any;
			public firstToken(): ISyntaxToken;
			public lastToken(): ISyntaxToken;
			public isTypeScriptSpecific(): boolean;
			public isIncrementallyUnusable(): boolean;
			public accept(visitor: ISyntaxVisitor): any;
			private realize();
			public collectTextElements(elements: string[]): void;
			private findTokenInternal(parent, position, fullStart);
			public withLeadingTrivia(leadingTrivia: ISyntaxTriviaList): ISyntaxToken;
			public withTrailingTrivia(trailingTrivia: ISyntaxTriviaList): ISyntaxToken;
			public isExpression(): boolean;
			public isPrimaryExpression(): boolean;
			public isMemberExpression(): boolean;
			public isPostfixExpression(): boolean;
			public isUnaryExpression(): boolean;
		}
		class FixedWidthTokenWithNoTrivia implements ISyntaxToken {
			public tokenKind: SyntaxKind;
			constructor(kind: SyntaxKind);
			public clone(): ISyntaxToken;
			public isNode(): boolean;
			public isToken(): boolean;
			public isList(): boolean;
			public isSeparatedList(): boolean;
			public kind(): SyntaxKind;
			public childCount(): number;
			public childAt(index: number): ISyntaxElement;
			public fullWidth(): number;
			public width(): number;
			public text(): string;
			public fullText(): string;
			public value(): any;
			public valueText(): string;
			public hasLeadingTrivia(): boolean;
			public hasLeadingComment(): boolean;
			public hasLeadingNewLine(): boolean;
			public hasLeadingSkippedText(): boolean;
			public leadingTriviaWidth(): number;
			public leadingTrivia(): ISyntaxTriviaList;
			public hasTrailingTrivia(): boolean;
			public hasTrailingComment(): boolean;
			public hasTrailingNewLine(): boolean;
			public hasTrailingSkippedText(): boolean;
			public trailingTriviaWidth(): number;
			public trailingTrivia(): ISyntaxTriviaList;
			public hasSkippedToken(): boolean;
			public toJSON(key: any): any;
			public firstToken(): ISyntaxToken;
			public lastToken(): ISyntaxToken;
			public isTypeScriptSpecific(): boolean;
			public isIncrementallyUnusable(): boolean;
			public accept(visitor: ISyntaxVisitor): any;
			private realize();
			public collectTextElements(elements: string[]): void;
			private findTokenInternal(parent, position, fullStart);
			public withLeadingTrivia(leadingTrivia: ISyntaxTriviaList): ISyntaxToken;
			public withTrailingTrivia(trailingTrivia: ISyntaxTriviaList): ISyntaxToken;
			public isExpression(): boolean;
			public isPrimaryExpression(): boolean;
			public isMemberExpression(): boolean;
			public isPostfixExpression(): boolean;
			public isUnaryExpression(): boolean;
		}
		class FixedWidthTokenWithLeadingTrivia implements ISyntaxToken {
			private _sourceText;
			private _fullStart;
			public tokenKind: SyntaxKind;
			private _leadingTriviaInfo;
			constructor(sourceText: ISimpleText, fullStart: number, kind: SyntaxKind, leadingTriviaInfo: number);
			public clone(): ISyntaxToken;
			public isNode(): boolean;
			public isToken(): boolean;
			public isList(): boolean;
			public isSeparatedList(): boolean;
			public kind(): SyntaxKind;
			public childCount(): number;
			public childAt(index: number): ISyntaxElement;
			public fullWidth(): number;
			private start();
			private end();
			public width(): number;
			public text(): string;
			public fullText(): string;
			public value(): any;
			public valueText(): string;
			public hasLeadingTrivia(): boolean;
			public hasLeadingComment(): boolean;
			public hasLeadingNewLine(): boolean;
			public hasLeadingSkippedText(): boolean;
			public leadingTriviaWidth(): number;
			public leadingTrivia(): ISyntaxTriviaList;
			public hasTrailingTrivia(): boolean;
			public hasTrailingComment(): boolean;
			public hasTrailingNewLine(): boolean;
			public hasTrailingSkippedText(): boolean;
			public trailingTriviaWidth(): number;
			public trailingTrivia(): ISyntaxTriviaList;
			public hasSkippedToken(): boolean;
			public toJSON(key: any): any;
			public firstToken(): ISyntaxToken;
			public lastToken(): ISyntaxToken;
			public isTypeScriptSpecific(): boolean;
			public isIncrementallyUnusable(): boolean;
			public accept(visitor: ISyntaxVisitor): any;
			private realize();
			public collectTextElements(elements: string[]): void;
			private findTokenInternal(parent, position, fullStart);
			public withLeadingTrivia(leadingTrivia: ISyntaxTriviaList): ISyntaxToken;
			public withTrailingTrivia(trailingTrivia: ISyntaxTriviaList): ISyntaxToken;
			public isExpression(): boolean;
			public isPrimaryExpression(): boolean;
			public isMemberExpression(): boolean;
			public isPostfixExpression(): boolean;
			public isUnaryExpression(): boolean;
		}
		class FixedWidthTokenWithTrailingTrivia implements ISyntaxToken {
			private _sourceText;
			private _fullStart;
			public tokenKind: SyntaxKind;
			private _trailingTriviaInfo;
			constructor(sourceText: ISimpleText, fullStart: number, kind: SyntaxKind, trailingTriviaInfo: number);
			public clone(): ISyntaxToken;
			public isNode(): boolean;
			public isToken(): boolean;
			public isList(): boolean;
			public isSeparatedList(): boolean;
			public kind(): SyntaxKind;
			public childCount(): number;
			public childAt(index: number): ISyntaxElement;
			public fullWidth(): number;
			private start();
			private end();
			public width(): number;
			public text(): string;
			public fullText(): string;
			public value(): any;
			public valueText(): string;
			public hasLeadingTrivia(): boolean;
			public hasLeadingComment(): boolean;
			public hasLeadingNewLine(): boolean;
			public hasLeadingSkippedText(): boolean;
			public leadingTriviaWidth(): number;
			public leadingTrivia(): ISyntaxTriviaList;
			public hasTrailingTrivia(): boolean;
			public hasTrailingComment(): boolean;
			public hasTrailingNewLine(): boolean;
			public hasTrailingSkippedText(): boolean;
			public trailingTriviaWidth(): number;
			public trailingTrivia(): ISyntaxTriviaList;
			public hasSkippedToken(): boolean;
			public toJSON(key: any): any;
			public firstToken(): ISyntaxToken;
			public lastToken(): ISyntaxToken;
			public isTypeScriptSpecific(): boolean;
			public isIncrementallyUnusable(): boolean;
			public accept(visitor: ISyntaxVisitor): any;
			private realize();
			public collectTextElements(elements: string[]): void;
			private findTokenInternal(parent, position, fullStart);
			public withLeadingTrivia(leadingTrivia: ISyntaxTriviaList): ISyntaxToken;
			public withTrailingTrivia(trailingTrivia: ISyntaxTriviaList): ISyntaxToken;
			public isExpression(): boolean;
			public isPrimaryExpression(): boolean;
			public isMemberExpression(): boolean;
			public isPostfixExpression(): boolean;
			public isUnaryExpression(): boolean;
		}
		class FixedWidthTokenWithLeadingAndTrailingTrivia implements ISyntaxToken {
			private _sourceText;
			private _fullStart;
			public tokenKind: SyntaxKind;
			private _leadingTriviaInfo;
			private _trailingTriviaInfo;
			constructor(sourceText: ISimpleText, fullStart: number, kind: SyntaxKind, leadingTriviaInfo: number, trailingTriviaInfo: number);
			public clone(): ISyntaxToken;
			public isNode(): boolean;
			public isToken(): boolean;
			public isList(): boolean;
			public isSeparatedList(): boolean;
			public kind(): SyntaxKind;
			public childCount(): number;
			public childAt(index: number): ISyntaxElement;
			public fullWidth(): number;
			private start();
			private end();
			public width(): number;
			public text(): string;
			public fullText(): string;
			public value(): any;
			public valueText(): string;
			public hasLeadingTrivia(): boolean;
			public hasLeadingComment(): boolean;
			public hasLeadingNewLine(): boolean;
			public hasLeadingSkippedText(): boolean;
			public leadingTriviaWidth(): number;
			public leadingTrivia(): ISyntaxTriviaList;
			public hasTrailingTrivia(): boolean;
			public hasTrailingComment(): boolean;
			public hasTrailingNewLine(): boolean;
			public hasTrailingSkippedText(): boolean;
			public trailingTriviaWidth(): number;
			public trailingTrivia(): ISyntaxTriviaList;
			public hasSkippedToken(): boolean;
			public toJSON(key: any): any;
			public firstToken(): ISyntaxToken;
			public lastToken(): ISyntaxToken;
			public isTypeScriptSpecific(): boolean;
			public isIncrementallyUnusable(): boolean;
			public accept(visitor: ISyntaxVisitor): any;
			private realize();
			public collectTextElements(elements: string[]): void;
			private findTokenInternal(parent, position, fullStart);
			public withLeadingTrivia(leadingTrivia: ISyntaxTriviaList): ISyntaxToken;
			public withTrailingTrivia(trailingTrivia: ISyntaxTriviaList): ISyntaxToken;
			public isExpression(): boolean;
			public isPrimaryExpression(): boolean;
			public isMemberExpression(): boolean;
			public isPostfixExpression(): boolean;
			public isUnaryExpression(): boolean;
		}
		function fixedWidthToken(sourceText: ISimpleText, fullStart: number, kind: SyntaxKind, leadingTriviaInfo: number, trailingTriviaInfo: number): ISyntaxToken;
		function variableWidthToken(sourceText: ISimpleText, fullStart: number, kind: SyntaxKind, leadingTriviaInfo: number, width: number, trailingTriviaInfo: number): ISyntaxToken;
		function isExpression(token: ISyntaxToken): boolean;
		function realizeToken(token: ISyntaxToken): ISyntaxToken;
		function convertToIdentifierName(token: ISyntaxToken): ISyntaxToken;
		function tokenToJSON(token: ISyntaxToken): any;
		function value(token: ISyntaxToken): any;
		function massageEscapes(text: string): string;
		function valueText(token: ISyntaxToken): string;
		function emptyToken(kind: SyntaxKind): ISyntaxToken;
		function token(kind: SyntaxKind, info?: ITokenInfo): ISyntaxToken;
		function identifier(text: string, info?: ITokenInfo): ISyntaxToken;
		function deferredTrivia(kind: SyntaxKind, text: ISimpleText, fullStart: number, fullWidth: number): ISyntaxTrivia;
		function trivia(kind: SyntaxKind, text: string): ISyntaxTrivia;
		function skippedTokenTrivia(token: ISyntaxToken): ISyntaxTrivia;
		function spaces(count: number): ISyntaxTrivia;
		function whitespace(text: string): ISyntaxTrivia;
		function multiLineComment(text: string): ISyntaxTrivia;
		function singleLineComment(text: string): ISyntaxTrivia;
		var spaceTrivia: ISyntaxTrivia;
		var lineFeedTrivia: ISyntaxTrivia;
		var carriageReturnTrivia: ISyntaxTrivia;
		var carriageReturnLineFeedTrivia: ISyntaxTrivia;
		function splitMultiLineCommentTriviaIntoMultipleLines(trivia: ISyntaxTrivia): string[];
		var emptyTriviaList: ISyntaxTriviaList;
		function triviaList(trivia: ISyntaxTrivia[]): ISyntaxTriviaList;
		var spaceTriviaList: ISyntaxTriviaList;
	}
	module Parser {
		function parse(fileName: string, text: ISimpleText, isDeclaration: boolean, options: ParseOptions): SyntaxTree;
		function incrementalParse(oldSyntaxTree: SyntaxTree, textChangeRange: TextChangeRange, newText: ISimpleText): SyntaxTree;
	}
}
declare class FormattingOptions {
	public useTabs: boolean;
	public spacesPerTab: number;
	public indentSpaces: number;
	public newLineCharacter: string;
	constructor(useTabs: boolean, spacesPerTab: number, indentSpaces: number, newLineCharacter: string);
	static defaultOptions: FormattingOptions;
}
